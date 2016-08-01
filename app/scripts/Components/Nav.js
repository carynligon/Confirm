import React from 'react';

import session from '../Models/session';

const Nav = React.createClass({
  logout: function() {
    session.logout();
  },
  render: function() {
    return(
      <nav>
        <li onClick={this.logout}>Logout</li>
      </nav>
    );
  }
});

export default Nav;
