import React from 'react';

import store from '../store';

import Modal from './Modal';

const ReadDocument = React.createClass({
  handleCheck: function(e) {
    let doc = store.documentsCollection.get(this.props.params.id);
    console.log(doc);
    doc.save('read', true);
    document.getElementById('checkbox').disabled = 'true';
  },
  getInitialState: function() {
    return {
      doc: store.documentsCollection.get(this.props.params.id).toJSON()
    };
  },
  componentDidMount: function() {
    store.documentsCollection.on('add change update', () => {
      this.setState({doc: store.documentsCollection.get(this.props.params.id).toJSON()});
    });
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
      </Modal>
    );
  }
});

export default ReadDocument;
