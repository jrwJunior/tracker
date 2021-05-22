/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { ICreateUserState } from './index.d';
import { CreateUserActions } from './action';

const initalState: ICreateUserState = {
  successfully: false,
  loading: false,
  error: null,
};

const reducer = produce(
  (draft: ICreateUserState, action: CreateUserActions): void => {
    switch (action.type) {
      case '@create/GET':
        draft.successfully = false;
        draft.error = null;
        draft.loading = true;
        break;
      case '@create/SUCCESSFUL':
        draft.successfully = true;
        draft.loading = false;
        break;
      case '@create/CLEAN':
        draft.successfully = false;
        break;
      case '@create/ERROR':
        draft.successfully = false;
        draft.loading = false;
        draft.error = action.payload;
    }
  },
  initalState,
);

export default reducer;
