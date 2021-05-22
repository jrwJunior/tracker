/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  // call,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects';

// import { userCreate } from 'states/utils/API/createUserAPI';
import { CreateUserActionTypes } from './types';
import {
  setSuccessCreateUser,
  setCreateUserError,
  createUserAsync,
} from './action';

function* createAndUpdateUser({ payload }: ReturnType<typeof createUserAsync>) {
  try {
    const { position, ...rest } = payload;
    const data = {
      ...rest,
      positionid: position.value,
      role: rest.role.value,
    };
    console.log(data);
    // yield call(userCreate, { user: data });
    yield put(setSuccessCreateUser());
  } catch (err) {
    const { message } = JSON.parse(err.message);
    yield put(setCreateUserError(message));
  }
}

function* watchSagaCreateUser(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(CreateUserActionTypes.GET, createAndUpdateUser);
}

export { watchSagaCreateUser as sagaCreateUser };
