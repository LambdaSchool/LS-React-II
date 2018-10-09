import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

class CommentSection extends React.Component {
  state = { comments: this.props.comments, newComment: '' };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map((comment) => {
          return <Comment comment={comment} key={comment.text} />;
        })}
        <div className="timestamp">{this.props.timestamp}</div>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="newComment"
            value={this.state.newComment}
            placeholder="Add a comment..."
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}