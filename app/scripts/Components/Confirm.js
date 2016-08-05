import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

const ConfirmModal = React.createClass({
  inputYes: function () {
    let doc = store.documentsCollection.get(this.props.params.id);
    console.log(doc);
    doc.save('read', true);
    document.getElementById('checkbox').disabled = 'true';
    hashHistory.push(`/`);
  },
  inputNo: function() {
    hashHistory.push(`/${this.props.params.id}`)
  },
  containerStyles: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0,.5)'
  },
  contentStyles: {
    background: 'white',
    width: '75%',
    margin: '0 auto',
    height: '60vh',
    marginTop: '12.5%',
    overflow: 'scroll'
  },
  render: function() {
    return (
      <div className="confirm-container" style={this.containerStyles}>
        <div className="confirm-content" style={this.contentStyles}>
          <p>Are you sure you've read this?</p>
          <input type="button" id="confirm-yes" value="yes" onClick={this.inputYes}/>
          <input type="button" id="confirm-no" value="no" onClick={this.inputNo}/>
        </div>
      </div>
    );
  }
});

export default ConfirmModal;
