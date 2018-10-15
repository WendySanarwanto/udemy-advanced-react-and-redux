import React, { Component } from 'react';
import './app.css';
import EnterCommentForm from './enterCommentForm';
import CommentsList from './commentsList';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <EnterCommentForm />
        <CommentsList />
      </div>
    );
  }
}

export default App;