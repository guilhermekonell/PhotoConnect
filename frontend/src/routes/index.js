import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/shared/SignIn';
import SignUp from '../pages/shared/SignUp';
import Profile from '../pages/shared/Profile';

import Dashboard from '../pages/client/Dashboard';

import Portfolio from '../pages/provider/Portfolio';
import newPortfolio from '../pages/provider/Portfolio/NewPortfolio';

export default function Routes() {
  const { provider } = useSelector((state) => state.user.profile || false);

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route
        path="/portfolio"
        component={provider ? Portfolio : newPortfolio}
        isPrivate
      />
    </Switch>
  );
}
