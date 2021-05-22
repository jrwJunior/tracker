/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import { all, call, fork, put, select, take } from 'redux-saga/effects';
import { RootState } from 'states/store';

import {
  getAllPositions,
  putUpdatePosition,
  createPosition,
  deletePosition,
} from 'states/utils/API/positionsAPI';
import {
  setPosition,
  setCreatePosition,
  setPositions,
  setPositionsError,
} from './action';

import { PositionsActionTypes } from './types';

const getAllPoss = (state: RootState) => state.positions.positions;

function* getPositions({ payload }: ReturnType<typeof setPositions>) {
  try {
    const { content, totalpages } = yield call(getAllPositions, payload);

    yield put(
      setPositions({
        content,
        totalpages,
      }),
    );
  } catch (err) {
    const { message } = JSON.parse(err.message);
    yield put(setPositionsError(message));
  }
}

function* update({ payload }: ReturnType<typeof setPosition>) {
  try {
    const data = yield call(putUpdatePosition, payload);
    const positions = yield select(getAllPoss);

    // eslint-disable-next-line max-len
    const newPositions = positions.filter(
      (item: { id: number; name: string }) => item.id !== data.id,
    );

    yield put(setPosition([...newPositions, data]));
  } catch (err) {
    const { message } = JSON.parse(err.message);
    yield put(setPositionsError(message));
  }
}

function* create({ payload }: ReturnType<typeof setCreatePosition>) {
  try {
    const data = yield call(createPosition, payload);

    const positions = yield select(getAllPoss);
    yield put(setCreatePosition([...positions, data]));
  } catch (err) {
    const { message } = JSON.parse(err.message);
    yield put(setPositionsError(message));
  }
}

function* remove({ payload: id }: any) {
  try {
    yield call(deletePosition, id);
    const positions = yield select(getAllPoss);
    const newPositions = positions.filter((item: any) => item.id !== id);

    yield put(setPosition(newPositions));
  } catch (err) {
    yield put(setPositionsError(err.message));
  }
}

function* watchAllSagas() {
  while (true) {
    const action = yield take([
      PositionsActionTypes.GET,
      PositionsActionTypes.UPDATE,
      PositionsActionTypes.CREATE,
      PositionsActionTypes.DELETE,
    ]);

    switch (action.type) {
      case PositionsActionTypes.GET:
        yield fork(getPositions, action);
        break;
      case PositionsActionTypes.UPDATE:
        yield fork(update, action);
        break;
      case PositionsActionTypes.CREATE:
        yield fork(create, action);
        break;
      default:
        yield fork(remove, action);
    }
  }
}

export { watchAllSagas as sagaPositions };
