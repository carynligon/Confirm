import React from 'react';

import DocumentList from './DocumentList';

const Dashboard = React.createClass({
  render: function() {
    return (
      <div id="dashboard-container">
        <DocumentList/>
        {this.props.children}
      </div>
    );
  }
});

export default Dashboard;
