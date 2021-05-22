/* eslint-disable no-param-reassign */
import produce from 'immer';
import { IPositionsState } from './index.d';
import { PositionActions } from './action';

const initialState: IPositionsState = {
  positions: [],
  totalPage: 0,
  loadingPos: false,
  isSubmitted: false,
  errorPos: null,
};

// eslint-disable-next-line max-len
const reducer = produce(
  (draft: IPositionsState, action: PositionActions): void => {
    switch (action.type) {
      case '@positions/GET':
        draft.errorPos = null;
        draft.loadingPos = true;
        break;
      case '@position/UPDATE':
      case '@position/CREATE':
        draft.isSubmitted = true;
        break;
      case '@positions/ADD':
        // eslint-disable-next-line no-case-declarations
        const { content, totalpages } = action.payload;

        draft.loadingPos = false;
        draft.positions = content;
        draft.totalPage = totalpages;
        break;
      case '@position/ADD_NEW':
      case '@position/EDIT':
        draft.isSubmitted = false;
        draft.positions = action.payload;
        break;
      case '@positions/CLEAR':
        draft.errorPos = null;
        break;
      case '@positions/ERROR':
        draft.errorPos = action.payload;
        draft.isSubmitted = false;
    }
  },
  initialState,
);

export default reducer;
