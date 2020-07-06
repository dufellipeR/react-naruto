import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Characters from '../pages/Characters';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details/:character" component={Details} />
    <Route path="/characters" component={Characters} />
  </Switch>
);

export default Routes;
