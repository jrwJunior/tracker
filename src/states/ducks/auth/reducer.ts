/* eslint-disable no-param-reassign */
import produce from 'immer';
import session from 'utilities/helpers/sessionAuth';

import { LoginState } from './index.d';
import { LoginActions } from './action';

export const initalState: LoginState = {
  user: null,
  isAuthenticated: session.hasAccess(),
  isSubmitted: false,
  error: null,
};

// eslint-disable-next-line max-len
const reducer = produce((draft: LoginState, action: LoginActions): void => {
  switch (action.type) {
    case '@login/USER_REQUEST':
      draft.isSubmitted = true;
      draft.error = null;
      break;
    case '@login/USER_SUCCESS':
      // eslint-disable-next-line no-case-declarations
      const { secondname, email } = action.payload;

      draft.user = { secondname, email };
      draft.isSubmitted = false;
      draft.isAuthenticated = true;
      break;
    case '@login/USER_ERROR':
      draft.isSubmitted = false;
      draft.error = action.payload;
      break;
    case '@login/USER_LOGOUT':
      draft.isAuthenticated = false;
      break;
  }
}, initalState);

export default reducer;
