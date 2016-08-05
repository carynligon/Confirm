import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

import ConfirmModal from './Confirm';
import Modal from './Modal';

const ReadDocument = React.createClass({
  handleCheck: function(e) {
    let doc = store.documentsCollection.get(this.props.params.id);
    hashHistory.push(`/${this.props.params.id}/confirm`);
  },
  getInitialState: function() {
    return {
      doc: store.documentsCollection.get(this.props.params.id).toJSON()
    };
  },
  listener: function() {
    this.setState({doc: store.documentsCollection.get(this.props.params.id).toJSON()});
  },
  componentDidMount: function() {
    store.documentsCollection.on('add change update', this.listener);
  },
  componentWillUnmount: function() {
    store.documentsCollection.off('add change update', this.listener);
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.setState({doc: store.documentsCollection.get(nextProps.params.id).toJSON()})
    }
  },
  render: function() {
    let checkStatus;
    let disabled;
    if (this.state.doc.read === true) {
      checkStatus = "true";
      disabled = true;
    } else {
      checkStatus = false;
      disabled = false;
    }
    return(
      <Modal>
        <section>
          <h2>{this.state.doc.title}</h2>
          <p>{this.state.doc.body}</p>
          <input type="checkbox" id="checkbox" onClick={this.handleCheck} checked={checkStatus} disabled={disabled}/><span>Read</span>
        </section>
        {this.props.children}
      </Modal>
    );
  }
});

export default ReadDocument;
