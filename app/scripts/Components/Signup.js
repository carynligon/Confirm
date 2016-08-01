import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

import store from '../store';

import Header from './Header';


const Signup = React.createClass({
  closeModal: function() {
    hashHistory.push('/');
  },
  newUser: function(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    store.userCollection.create({
      username: username,
      password: password,
      name: name
    }, {
      success: function(response) {
        console.log('success: ' + response);
        hashHistory.push('/');
      },
      error: function(response) {
        console.log('error: ' + response);
      }
    });
  },
  render: function() {
    return (
      <div className="login-wrapper">
        <Header/>
        <form className="login-form" onSubmit={this.newUser}>
          <h1>Welcome</h1>
          <input id="name" type="text" name="name" placeholder="NAME" ref="name"/>
          <input id="username" type="text" name="username" placeholder="USERNAME" ref="username"/>
          <input id="password" type="password" name="password" placeholder="PASSWORD" ref="password"/>
          <input type="submit" name="submit" value="SIGN UP"/>
          <p><Link to="/login">SIGN IN</Link>IF YOU ARE ALREADY A MEMBER.</p>
        </form>
      </div>
    );
  }
});

export default Signup;
