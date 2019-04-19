// import React, { Component } from 'react'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { submitComment } from '../actions';
import './CommentBox.css';

const CommentBox = props => {
  const [commentEntry, setCommentEntry] = useState('');
  const onFormSubmit = event => {
    event.preventDefault();
    
    props.submitComment(commentEntry);

    // empty the comment entry input field
    setCommentEntry('');
  }

  return (
    <div>
      <h4>Enter a Comment</h4>
      <form onSubmit={ onFormSubmit } className="input-group">
        <textarea rows="4" cols="50" 
          className="form-control" placeholder="Here is my comment"
          value={ commentEntry }
          onChange={ e => setCommentEntry( e.target.value ) }/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>        
    </div>
  );
}

export default connect(null, { submitComment })(CommentBox);
