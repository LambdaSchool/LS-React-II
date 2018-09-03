import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

class Post extends React.Component {
  state = {
    likes: this.props.post.likes
  };

  // TODO: some logic for adding likes
  like = () => {};

  render() {
    return (
      <div className="post-wrapper">
        <div className="post-header-wrapper">
          <img src={this.props.post.thumbnailUrl} alt={"Profile thumb."} />
          <div className="username">{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt={"post"} />
        <p>{this.state.likes} likes</p>
        <CommentSection post={this.props.post} />
      </div>
    );
  }
}
// done some proptypes https://reactjs.org/docs/typechecking-with-proptypes.html
Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;
