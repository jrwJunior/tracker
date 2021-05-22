import { Middleware } from 'redux';
import session from 'utilities/helpers/sessionAuth';

const middlewareLogin: Middleware = () => next => action => {
  if (action.type === '@login/USER_SUCCESS') {
    const { token } = action.payload;
    session.setAccessToken(token);
  }

  next(action);
};

export default middlewareLogin;
