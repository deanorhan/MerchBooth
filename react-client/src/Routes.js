import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from './pages/NotFound';

import Home from './pages/Home'
import Login from './pages/Login';

import MerchList from './components/merch-list'
import CreateMerch from './components/create-merch';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />

      <Route path='/merch' component={MerchList} />
      <Route path='/create' component={CreateMerch} />
      <Route path='/login' component={Login} />

      <Route component={NotFound} />
    </Switch>
  );
}
