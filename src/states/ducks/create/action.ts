/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateUserActionTypes } from './types';
import { IRequest } from './index.d';

export interface IUserCreateRequestAction {
  type: CreateUserActionTypes.GET;
  payload: IRequest;
}

export interface ICreateUserSuccessAction {
  type: CreateUserActionTypes.SUCCESSFUL;
}

export interface ICreateUserErrorAction {
  type: CreateUserActionTypes.ERROR;
  payload: string;
}

export interface ICleanErrorAction {
  type: CreateUserActionTypes.CLEAN;
}

export const createUserAsync = (user: IRequest): IUserCreateRequestAction => ({
  type: CreateUserActionTypes.GET,
  payload: user,
});

export const setSuccessCreateUser = (): ICreateUserSuccessAction => ({
  type: CreateUserActionTypes.SUCCESSFUL,
});

export const setCreateUserError = (error: string): ICreateUserErrorAction => ({
  type: CreateUserActionTypes.ERROR,
  payload: error,
});

export const setClearState = (): ICleanErrorAction => ({
  type: CreateUserActionTypes.CLEAN,
});

export type CreateUserActions =
  | IUserCreateRequestAction
  | ICreateUserSuccessAction
  | ICreateUserErrorAction
  | ICleanErrorAction;
