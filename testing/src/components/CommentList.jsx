import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class CommentsList extends Component {

  renderComments(items){
    return (
      _.map(items, item => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.comment}
          </li>
        )
      })
    );
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="items-list-container">
        <hr/>
        <h4>Comments list</h4>
        { !comments || _.size(comments) < 1 ? <span>You have not entered any comments here.</span> : '' }
        <ul className="list-group">
          {comments && _.size(comments) > 0 ? this.renderComments(comments) : ''}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({comments}) {
  return { comments }
}

export default connect(mapStateToProps)(CommentsList);