import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'states/store';

interface PublicRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => {
  // eslint-disable-next-line max-len
  const isAuthenticated = useSelector(
    (state: RootState) => state.login.isAuthenticated,
  );

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
