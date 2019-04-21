import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Route path="/post" component={ CommentBox }/>
        <Route path="/" exact component={ CommentList } />
      </div>
    );
  }
}

export default App;