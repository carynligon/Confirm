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
          color: '#393939'
        }
      } else {
        styles = {
          color: '#dbdbdb'
        }
      }
      return <li key={i}><Link to={`/${doc._id}`} style={styles}>{doc.title}</Link></li>;
    });
    return(
      <div id="to-read">
        <ul id="document-ul">
          {documentArr}
        </ul>
      </div>
    );
  }
});

export default DocumentList;
