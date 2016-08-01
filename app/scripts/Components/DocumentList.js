import React from 'react';
import _ from 'underscore';
import {Link} from 'react-router';

import store from '../store';

const DocumentList = React.createClass({
  getInitialState: function() {
    return {
      documents: []
    };
  },
  componentDidMount: function() {
    store.documentsCollection.fetch({
      success: (response) => {
        this.setState({documents: response.toJSON()});
      }
    });
  },
  render: function() {
    let styles;
    let documentArr = this.state.documents.map((doc, i) => {
      if (doc.read === false) {
        styles = {
          color: 'red'
        }
      } else {
        styles = {
          color: 'black'
        }
      }
      return <li key={i}><Link to={`/${doc._id}`} style={styles}>{doc.title}</Link></li>;
    });
    return(
      <aside>
        <ul id="document-ul">
          {documentArr}
        </ul>
      </aside>
    );
  }
});

export default DocumentList;

// To create more docs:
// store.documentsCollection.create({
//   title: 'Pet Agreement',
//   body: `Cardigan seitan mixtape organic. Squid hoodie meh man bun. Messenger bag quinoa drinking vinegar banjo, helvetica XOXO tacos trust fund literally. Art party 90's shoreditch kogi, try-hard normcore fingerstache. Blog crucifix readymade migas lo-fi, austin vegan paleo artisan hoodie. Pork belly before they sold out chia retro selvage church-key, umami organic gochujang. Microdosing brunch shabby chic, chia cardigan wolf cliche celiac fap leggings.`
// }, {
//   success: function(response) {
//     console.log(response);
//   },
//   error: function(response) {
//     console.log('error: ' + response);
//   }
// });
