import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  const renderLinks = () => {
    const isAuthenticated = props.isAuthenticated;

    if (isAuthenticated) {
      return (
        <React.Fragment>
          <li><Link to="/signout">Sign Out</Link></li>
          <li><Link to="/feature">Feature</Link></li>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </React.Fragment>
    );
  };

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">      
        <ul className="nav navbar-nav">
          <li><Link to="/">Redux Auth</Link></li>
          { renderLinks() }
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
   isAuthenticated: state.auth && ((typeof state.auth.token) === 'string') && (state.auth.token.trim() !== '')
  };
};

export default connect(mapStateToProps)(Header);
