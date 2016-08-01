import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import settings from './settings';
import session from './models/Session';
import router from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

if (!localStorage.getItem('authtoken')) {
  hashHistory.push('/login');
} else {
  session.retrieve();
}

ReactDOM.render(router, document.getElementById('container'));
