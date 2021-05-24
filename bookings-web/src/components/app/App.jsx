import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import Header from '../header/Header';

export default function App() {
  return (
  <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component = {Getaways} />
  
      </Switch>
  </Router>
  );
}
