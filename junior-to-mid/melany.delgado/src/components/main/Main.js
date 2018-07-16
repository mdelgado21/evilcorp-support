import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../home/Home';
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/support" component={Layout} />
      <Route exact path="/admin/support" component={Layout} />
    </Switch>
  </main>
);
export default Main;
