import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetawayDetail from '../../containers/GetawayDetail';
import Getaways from '../../containers/Getaways';
import SignUp from '../../containers/SignUp';
import Header from '../header/Header';

export default function App() {
  const [token, setToken] = useState('');
  const handleToken = (userToken) => {
    setToken(userToken);
  };

  return (
  <Router>
    <Header token={token} className="header" />
      <Switch>
        <Route exact path="/" component = {Getaways} />
        <Route exact path="/:id" component = {GetawayDetail} />
        <Route exact path="/signup" component = {SignUp} />
        <Route exact path="/login"
          exact render={(routerProps) => (
            <LogInContainer 
              handleToken={handleToken}
              {...routerProps}
              />
          )}></Route>
  
      </Switch>
  </Router>
  );
}
