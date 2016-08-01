import $ from 'jquery';
import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

import Header from './Header';

const Login = React.createClass({
  loginUser: function(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    session.save({
      username: username,
      password: password
    }, {
      success: function(model, response) {
        window.localStorage.setItem('authtoken', response._kmd.authtoken);
        model.unset('password');
        hashHistory.push('/');
      },
      error: function(response) {
        document.getElementById('username').style.color = '#f32424';
        document.getElementById('password').style.color = '#f32424';
        document.getElementById('error-message').textContent = 'Invalid username or password';
        console.log('error: ' + response);
      }
    });
  },
  render: function() {
    return (
      <div className="login-wrapper">
        <Header/>
        <form className="login-form" onSubmit={this.loginUser}>
          <h1>Welcome</h1>
          <input id="username" type="text" name="username" placeholder="USERNAME" ref="username"/>
          <input id="password" type="password" name="password" placeholder="PASSWORD" ref="password"/>
          <p id="error-message"></p>
          <input type="submit" name="submit" value="SIGN IN"/>
          <p><Link to="/signup">SIGN UP</Link>IF YOU ARE NOT A MEMBER.</p>
        </form>
      </div>
    );
  }
});

export default Login;
