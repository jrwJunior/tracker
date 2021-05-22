import { Middleware } from 'redux';
import _ from 'lodash';

import storage from 'utilities/helpers/storage';

const middlewareFilter: Middleware = () => next => action => {
  if (action.type === '@users/GET') {
    storage.delete('filter_users');
  }

  if (action.type === '@users/FILTER') {
    const { data } = action.payload;
    if (
      !_.isEmpty(data) &&
      !Object.prototype.hasOwnProperty.call(data, 'query')
    ) {
      storage.set('filter_users', data);
    }

    _.isEmpty(data) && storage.delete('filter_users');
  }

  next(action);
};

export default middlewareFilter;
