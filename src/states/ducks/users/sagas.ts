/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, take, CallEffect, put, PutEffect } from 'redux-saga/effects';

import {
  getUsersAndFilterUsers,
  getFilterUsers,
} from 'states/utils/API/usersAPI';
import { UsersActionTypes } from './types';
import { IResponseUsers } from './index.d';
import { setUsers, setUsersFiltred } from './action';

function* getUsers({
  payload,
}: ReturnType<typeof setUsers>): Generator<
  CallEffect<any> | PutEffect<any>,
  void,
  IResponseUsers
> {
  try {
    const { data: postData, queryParams } = payload;
    const data = yield call(getUsersAndFilterUsers, postData, queryParams);

    yield put(setUsers(data));
  } catch (err) {
    const { message } = JSON.parse(err.message);
    console.log(message);
  }
}

function* getFiltredUsers({ payload }: ReturnType<typeof setUsersFiltred>) {
  try {
    const { data: postData, queryParams } = payload;
    const data = yield call(getFilterUsers, postData, queryParams);
    const isFiltered = !data.content.length;

    yield put(
      setUsersFiltred({
        ...data,
        filtered: isFiltered,
      }),
    );
  } catch (err) {
    const { message } = JSON.parse(err.message);
    console.log(message);
  }
}

function* watchSagaUsers() {
  while (true) {
    const action = yield take([UsersActionTypes.GET, UsersActionTypes.FILTER]);

    if (action.type === '@users/GET') {
      yield call(getUsers, action);
    } else {
      yield call(getFiltredUsers, action);
    }
  }
}

export { watchSagaUsers as sagaUsers };
