import React from 'react';

const Header = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <i className="fa fa-file logo" aria-hidden="true"/>
        </nav>
      </header>
    );
  }
});

export default Header;
