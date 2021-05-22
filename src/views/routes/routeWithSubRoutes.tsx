import React from 'react';
import { Route } from 'react-router-dom';

import { Routes } from './index.d';

// eslint-disable-next-line max-len
const RouteWithSubRoutes = ({ path, routes, component: Component }: Routes) => (
  <Route
    path={path}
    render={props => <Component {...props} routes={routes} />}
  />
);

export default RouteWithSubRoutes;
