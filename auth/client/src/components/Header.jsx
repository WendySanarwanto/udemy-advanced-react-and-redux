import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">      
        <ul className="nav navbar-nav">
          <li><Link to="/">Redux Auth</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signout">Sign Out</Link></li>
          <li><Link to="/feature">Feature</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
