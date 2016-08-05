import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import settings from './settings';
import session from './models/Session';
import router from './router';
import store from './store';

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


// To create more docs:
// store.documentsCollection.create({
//   title: 'Pet Agreement',
//   body: `"Cardigan seitan mixtape organic. Squid hoodie meh man bun. Messenger bag quinoa drinking vinegar banjo, helvetica XOXO tacos trust fund literally. Art party 90's shoreditch kogi, try-hard normcore fingerstache. Blog crucifix readymade migas lo-fi, austin vegan paleo artisan hoodie. Pork belly before they sold out chia retro selvage church-key, umami organic gochujang. Microdosing brunch shabby chic, chia cardigan wolf cliche celiac fap leggings."`
// }, {
//   success: function(response) {
//     console.log(response);
//   },
//   error: function(response) {
//     console.log('error: ' + response);
//   }
// });
