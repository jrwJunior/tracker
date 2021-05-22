import { LoginActionTypes } from './types';
import { RequestUser, ReponseData } from './index.d';

export interface IRequesUserAction {
  type: LoginActionTypes.USER_REQUEST;
  payload: RequestUser;
}

export interface ISetUserAction {
  type: LoginActionTypes.USER_SUCCESS;
  payload: ReponseData;
}

export interface ISetUserLogoutAction {
  type: LoginActionTypes.USER_LOGOUT;
}

export interface ISetErrorAction {
  type: LoginActionTypes.USER_ERROR;
  payload: {
    message: string;
    status: number;
  };
}

export const userLogin = (data: RequestUser): IRequesUserAction => ({
  type: LoginActionTypes.USER_REQUEST,
  payload: data,
});

// eslint-disable-next-line max-len
export const setUser = (data: ReponseData): ISetUserAction => ({
  type: LoginActionTypes.USER_SUCCESS,
  payload: data,
});

// eslint-disable-next-line max-len
export const setUserError = (error: {
  message: string;
  status: number;
}): ISetErrorAction => ({
  type: LoginActionTypes.USER_ERROR,
  payload: error,
});

export const setUserLogout = (): ISetUserLogoutAction => ({
  type: LoginActionTypes.USER_LOGOUT,
});

export type LoginActions =
  | IRequesUserAction
  | ISetUserAction
  | ISetErrorAction
  | ISetUserLogoutAction;
