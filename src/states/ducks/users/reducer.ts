/* eslint-disable no-param-reassign */
import produce from 'immer';
import { IUsersState } from './index.d';
import { UsersActions } from './action';

const initialState: IUsersState = {
  users: [],
  userPos: [],
  filtered: false,
  totalPage: 0,
  loading: false,
  error: null,
};

const reducer = produce((draft: IUsersState, action: UsersActions): void => {
  switch (action.type) {
    case '@users/GET':
      draft.loading = true;
      draft.filtered = false;
      break;
    case '@users/ADD':
      // eslint-disable-next-line no-case-declarations
      const { content, totalpages, positions } = action.payload;

      draft.users = content;
      draft.userPos = positions;
      draft.totalPage = totalpages;
      draft.loading = false;
      break;
    case '@users/FILTERED':
      draft.users = action.payload.content;
      draft.filtered = action.payload.filtered;
  }
}, initialState);

export default reducer;
