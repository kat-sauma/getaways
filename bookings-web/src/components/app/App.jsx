import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Getaways from '../../containers/Getaways';

export default function App() {
  return 
  <Router>
  <Header/>
  <Switch>
    <Route exact path="/" component = {Getaways} />
    <Route exact path="/:id" />

  </Switch>
</Router>;
}
