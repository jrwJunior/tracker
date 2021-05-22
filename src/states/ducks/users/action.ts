/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestUsers, IResponseUsers } from './index.d';
import { UsersActionTypes } from './types';

export interface IUsersRequestAction {
  type: UsersActionTypes.GET;
  payload: any;
}

export interface IUsersSuccessAction {
  type: UsersActionTypes.ADD;
  payload: any;
}

export interface IFilterUsersAction {
  type: UsersActionTypes.FILTER;
  payload: any;
}

export interface IFilteredUsersAction {
  type: UsersActionTypes.FILTERED;
  payload: any;
}

export const usersAsync = (
  users: IResponseUsers | undefined,
  queryParams?: string,
): IUsersRequestAction => ({
  type: UsersActionTypes.GET,
  payload: {
    data: users,
    queryParams,
  },
});

// eslint-disable-next-line max-len
export const filterUsersAsync = (
  filter: IRequestUsers,
  queryParams?: string,
): IFilterUsersAction => ({
  type: UsersActionTypes.FILTER,
  payload: {
    data: filter,
    queryParams,
  },
});

export const setUsers = (users: IResponseUsers): IUsersSuccessAction => ({
  type: UsersActionTypes.ADD,
  payload: users,
});

// eslint-disable-next-line max-len
export const setUsersFiltred = (
  users: IResponseUsers,
): IFilteredUsersAction => ({
  type: UsersActionTypes.FILTERED,
  payload: users,
});

export type UsersActions =
  | IUsersRequestAction
  | IUsersSuccessAction
  | IFilterUsersAction
  | IFilteredUsersAction;
