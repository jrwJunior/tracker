import { take, fork, call, put, all } from 'redux-saga/effects';

import { setUser, setUserError } from 'states/ducks/auth/action';
import { userLogin } from 'states/utils/API/authAPI';

import { LoginActionTypes } from './types';
import { RequestUser } from './index.d';

function* login(user: RequestUser) {
  try {
    const data = yield call(userLogin, user);

    yield put(
      setUser({
        ...data,
        isAuthenticated: true,
      }),
    );
  } catch (err) {
    const {
      message: { data, status },
    } = JSON.parse(err.message);

    yield put(
      setUserError({
        message: data,
        status,
      }),
    );
  }
}

function* loginFlow() {
  while (true) {
    const { payload } = yield take(LoginActionTypes.USER_REQUEST);
    yield call(login, payload);
  }
}

function* watchSagaAuth() {
  yield all([fork(loginFlow)]);
}

export { watchSagaAuth as sagaAuth };
