import React from 'react';
import { Switch } from 'react-router-dom';

// components
import Dashboard from 'views/pages/Dashboard';
import Sigin from 'views/components/Auth/Sigin';
// import ResetPassword from 'views/components/Auth/ResetPassword';

// Routes
import { PublicRoute, PrivateRoute } from 'views/routes';

const App = () => (
  <Switch>
    <PublicRoute exact path="/auth/login" component={Sigin} />
    {/* <PublicRoute exact path="/auth/reset_password" component={ResetPassword} /> */}
    <PrivateRoute path="/" component={Dashboard} />
  </Switch>
);

export default App;
