import React from "react";
import PropTypes from "prop-types";
import Comment from './Comment'
import CommentInput from './CommentInput'
import moment from 'moment'
import './CommentSection.css'


class CommentSection extends React.Component  {
    constructor(props) {
      super(props);
      this.state ={
        comments: [],
        comment: '',
        timestamp: ''
      }
    }

    componentDidMount() {
      const id = this.props.postID;
      if (localStorage.getItem(id)) {
        this.setState({
          comments: this.props.comments,
          // comments: JSON.parse(localStorage.getItem(this.props.postID))
          timestamp: this.props.timestamp
        })
      } else {
        this.setComments();
      }
    }
    componentWillUnmount () {
      this.setComments();
    }

    setComments = () => {
      localStorage.setItem (
        this.props.postID,
        JSON.stringify(this.state.comments)
      )
    }
    commentHandler = e => {
      this.setState({ comment: e.target.value })
    }

    handleCommentSubmit = e => {
      e.preventDefault();
      const newComment = { text: this.state.comment, username: 'Lenna'}
      const comments = this.state.comments.slice();
      comments.push(newComment);
      this.setState({ comments, comment: ''})
      setTimeout( () =>{
        this.setComments();
      }, 500);
    }
    render() {
      return (
        
        <div>
          
          {this.state.comments.map((comment, index) => 
          <Comment key={index} comment={comment}/>)}
          
          <CommentInput comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler} 
          timestamp= {this.state.timestamp}
          />
        </div>
      )
    }
}

  
  


CommentSection.propTypes = {
    commentsarray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default CommentSection;