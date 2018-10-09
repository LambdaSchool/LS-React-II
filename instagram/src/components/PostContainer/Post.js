import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  addLike = () => this.setState({ likes: this.state.likes + 1 });
  render() {
    return (
      <div className="post">
        <div className="profile">
          <img
            src={this.props.post.thumbnailUrl}
            alt={this.props.post.username}
            className="profile-picture"
          />
          <span className="username">{this.props.post.username}</span>
        </div>
        <img
          src={this.props.post.imageUrl}
          alt={this.props.post.comments[0].text}
        />
        <div className="icons">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            onClick={this.addLike}
          />
          <FontAwesomeIcon
            icon={faComment}
            style={{ height: "25px", width: "25px" }}
          />
        </div>
        <p className="likes">{this.state.likes} likes</p>
        <CommentSection comments={this.props.post.comments} />
        <p className="timestamp">
          {moment(
            this.props.post.timestamp,
            "MMMM Do YYYY, h:mm:ss a"
          ).fromNow()}
        </p>
      </div>
    );
  }
}
export default Post;
