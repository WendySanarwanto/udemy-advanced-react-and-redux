import React, { Component } from 'react';
import './App.css';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;