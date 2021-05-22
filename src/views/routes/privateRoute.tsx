import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'states/store';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const PublicRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  // eslint-disable-next-line max-len
  const isAuthenticated = useSelector(
    (state: RootState) => state.login.isAuthenticated,
  );

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default PublicRoute;
