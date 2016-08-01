import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Home';
import ReadDocument from './components/ReadDocument';

const router = (
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/" component={Dashboard}>
      <Route path="/:id" component={ReadDocument}/>
    </Route>
  </Router>
);

export default router;
