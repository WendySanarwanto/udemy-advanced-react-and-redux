import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitComment } from '../../actions';
import './enter-comment-form.css';

export class EnterCommentForm extends Component {
  state = { commentEntry: "" };

  onFormSubmit(event){
    event.preventDefault();

    // Pass in the comment Entry into submitComment action creator
    // console.log(`[DEBUG] - <EnterCommentForm.onFormSubmit> this.state.commentEntry: ${this.state.commentEntry}`);
    this.props.submitComment(this.state.commentEntry);

    // empty the comment entry input field
    this.setState({ commentEntry: "" });
  }

  render() {
    return (
      <div>
        <h4>Enter a Comment</h4>
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <textarea rows="4" cols="50" 
            className="form-control" placeholder="Here is my comment"
            value={this.state.commentEntry}
            onChange={e => this.setState({ commentEntry: e.target.value })}/>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>        
      </div>
    );
  }
}

export default connect(null, { submitComment })(EnterCommentForm);
