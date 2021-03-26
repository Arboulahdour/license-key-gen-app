import React from 'react';

import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
      	<Route exact path="/" component={Home} />
      	<Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
