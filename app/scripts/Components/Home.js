import React from 'react';

import DocumentList from './DocumentList';
import Header from './Header';
import Nav from './Nav';

const Dashboard = React.createClass({
  render: function() {
    return (
      <div id="dashboard-container">
        <Header/>
        <Nav/>
        <DocumentList/>
        {this.props.children}
      </div>
    );
  }
});

export default Dashboard;
