import _ from 'lodash';
// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux';

const CommentsList = (props) => {
  
  const renderComments = items => {
    // console.log(`[debug]<CommentsList@renderComments> items: \n`, items);
    return (
      _.map(items, item => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        )
      })
    );
  }

  const { comments } = props;

  return (
    <div className="items-list-container">
      {/* <hr/> */}
      <h4>Comments list</h4>
      { !comments || _.size(comments) < 1 ? <span>You have not entered any comments here.</span> : '' }
      <ul className="list-group">
        {comments && _.size(comments) > 0 ? renderComments(comments) : ''}
      </ul>
    </div>
  );
};

function mapStateToProps({comments}) {
  // console.log(`[debug]<CommentsList@mapStateToProps> comments: \n`, comments);
  return { comments }
}

export default connect(mapStateToProps)(CommentsList);