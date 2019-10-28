import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage'
import AppLayout from './app.layout'
import ProtectedRoute from './protected.route'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className = "App">
      
      <h1> Protected React Router</h1>
      {/* <LandingPage></LandingPage> */}
      <Switch>
        <Route exact path = "/" component  = {LandingPage} />
        <ProtectedRoute exact path = "/app" component  = {AppLayout} />
        <Route path = "*" component = { () => "404 NOT FOUND"} ></Route>
      </Switch>
    </div>
  );
}

export default App;
