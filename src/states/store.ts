/* eslint-disable import/order */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from 'states/saga';
import authMiddleware from './utils/middlewares/auth';
import filterMiddleware from './utils/middlewares/filters';

import * as reducers from 'states/ducks';

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, authMiddleware, filterMiddleware),
  ),
);

sagaMiddleware.run(saga);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
