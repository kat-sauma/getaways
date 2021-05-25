import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetawayDetail from '../../containers/GetawayDetail';
import Getaways from '../../containers/Getaways';
import Header from '../header/Header';

export default function App() {
  return (
  <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component = {Getaways} />
        <Route exact path="/:id" component = {GetawayDetail} />
  
      </Switch>
  </Router>
  );
}
