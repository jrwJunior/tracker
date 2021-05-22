/* eslint-disable import/no-cycle */
import { all, fork } from 'redux-saga/effects';

import { sagaAuth } from 'states/ducks/auth/sagas';
import { sagaUsers } from 'states/ducks/users/sagas';
import { sagaPositions } from 'states/ducks/positions/sagas';
import { sagaCreateUser } from 'states/ducks/create/sagas';

const sagas = [sagaAuth, sagaUsers, sagaPositions, sagaCreateUser];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
