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


// // To create more docs:
// store.documentsCollection.create({
//   title: 'Lease Inventory',
//   body: `Slow-carb semiotics kitsch, tousled letterpress umami fanny pack beard schlitz polaroid narwhal fingerstache meggings keytar. Letterpress gochujang dreamcatcher, mumblecore photo booth mixtape lo-fi church-key helvetica authentic bushwick tote bag godard. Banjo mumblecore ugh bicycle rights sartorial, jean shorts pour-over listicle. Authentic gentrify gluten-free, lo-fi ugh small batch +1 typewriter literally shabby chic mustache tilde. Sartorial selvage neutra PBR&B, heirloom seitan viral ramps iPhone vinyl mixtape listicle meh wayfarers. Crucifix photo booth williamsburg fingerstache tilde roof party wayfarers small batch street art pop-up blog, DIY fanny pack. Meggings meditation intelligentsia kale chips ramps cray knausgaard sartorial, actually gochujang try-hard.`
// }, {
//   success: function(response) {
//     console.log(response);
//   },
//   error: function(response) {
//     console.log('error: ' + response);
//   }
// });
