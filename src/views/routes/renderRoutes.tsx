/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Switch } from 'react-router-dom';

// Helpers
import RouteWithSubRoutes from 'views/routes/routeWithSubRoutes';
import { RouteParams } from './index.d';

const RenderRoutes = ({ routes }: { routes: Array<RouteParams> }) => (
  <Switch>
    {routes.map((route: RouteParams) => (
      <RouteWithSubRoutes {...route} />
    ))}
  </Switch>
);

export default RenderRoutes;
