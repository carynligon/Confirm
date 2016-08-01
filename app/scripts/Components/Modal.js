import React from 'react';
import {hashHistory} from 'react-router';

const Modal = React.createClass({
  closeModal: function() {
    hashHistory.push('/');
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
    height: '75vh',
    marginTop: '12.5%'
  },
  render: function() {
    return (
      <div className="modal-container" style={this.containerStyles}>
        <div className="modal-content" style={this.contentStyles}>
          <input type="button" value="X" id="close-modal" onClick={this.closeModal}/>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Modal;
