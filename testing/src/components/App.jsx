import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { changeAuth } from '../actions';

const signInOutButtonStyle =  { marginRight: '2em' };

const App = props => {
  const renderButton = () => {
    const isSignedIn = props.auth;
    if (isSignedIn) {
      return <button className="navbar-btn btn btn-primary" 
                    style={ signInOutButtonStyle }
                    onClick={ () => props.changeAuth(false) } >Sign Out</button>;
    }

    return <button className="navbar-btn btn btn-primary" 
                   style={ signInOutButtonStyle }
                   onClick={ () => props.changeAuth(true) }>Sign In</button>;
  }
  
  const renderHeader = () => {
    return (
      <nav class="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post A Comment</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            { renderButton() }
          </li>
        </ul>
      </nav>
    );
  }
  
  return (
    <div className="app container">
      { renderHeader() }
      <Route path="/post" component={ CommentBox }/>
      <Route path="/" exact component={ CommentList } />
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { changeAuth })(App);