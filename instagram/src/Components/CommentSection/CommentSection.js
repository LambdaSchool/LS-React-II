import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: ''
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  submitComment = event => {
    event.preventDefault();

    const nextComment = { text: this.state.comment, username: 'kevinsooter' };

    const comments = this.state.comments.slice();

    comments.push(nextComment);

    this.setState({ comments: comments, comment: '' });
  };

  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <div className="timestamp">
          {moment()
            .startOf('day')
            .fromNow(this.props.post.timestamp)
            .toUpperCase()}{' '}
          AGO
        </div>
        <form onSubmit={this.submitComment}>
          <input
            placeholder="Add a comment..."
            type="text"
            value={this.state.comment}
            onChange={this.commentHandler}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array,
    timestamp: PropTypes.string
  })
};

export default CommentSection;
