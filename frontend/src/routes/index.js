import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/shared/SignIn';
import SignUp from '../pages/shared/SignUp';
import Profile from '../pages/shared/Profile';

import Dashboard from '../pages/client/Dashboard';
import Service from '../pages/client/Service';
import ServiceStatus from '../pages/client/ServiceStatus';
import Photographer from '../pages/client/Photographer';
import RequestService from '../pages/client/Photographer/RequestService';
import Search from '../pages/client/Search';

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
      <Route path="/service" component={Service} isPrivate />
      <Route path="/servicestatus" component={ServiceStatus} isPrivate />
      <Route path="/photographer" component={Photographer} isPrivate />
      <Route path="/requestservice" component={RequestService} isPrivate />
      <Route path="/search" component={Search} isPrivate />

      <Route
        path="/portfolio"
        component={provider ? Portfolio : newPortfolio}
        isPrivate
      />
    </Switch>
  );
}
