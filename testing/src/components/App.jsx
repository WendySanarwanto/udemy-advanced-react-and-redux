import React, { Component } from 'react';
import 'components/App.css';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

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