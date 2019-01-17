import React, { Component } from 'react';

import './CommentSection.css';

import styled from 'styled-components';

//newComment holds comment that is made to one of the instagram posts; count is the numbrer of likes

//for a given post

let newComment;

let count = 0;

const Comment = styled.div`
  text-decoration:none;
  display:flex;
  align-items:center;


`;

const CommentText = styled.div`
  margin: 5px 0 5px 1%;

`;

const CommentBox = styled.input`
  width:100%;
  height:50px;

`;

const CommentSubmit = styled.input`
  display:none;

`;
class CommentSection extends Component{

  constructor(props){

    super(props);

    this.state = {

      currentComment: "",

      comments: [...props.comments],

      count:count,

      thisUserClicked: false

    }

  }

  getNewComment = (event, index)=>{

    newComment = event.target.value;

    this.setState(prevState => ({currentComment: newComment}))


  }

  addNewComment = (e)=>{

    e.preventDefault();

    this.setState(prevState =>({

      comments: [{username: 'User', text: newComment},...prevState.comments]

    }), ()=>{this.setState(prevState =>({currentComment: ""}))})
    localStorage.setItem("comments", this.state.comments);

  }

  addLike = (e) =>{

    if(!this.state.thisUserClicked){

    count+=1;

    this.setState(prevState => ({count: count, thisUserClicked: true}));}

    else{

      count -=1;

      this.setState(prevState =>({count: count, thisUserClicked: false}))

    }

  }

  componentWillReceiveProps(nextProps){

    this.setState(nextProps)

  }

  render(){

    return(

      <div className = "comment-section">

      <div className = "post-reactions"><i  onClick = {()=>{this.addLike()}} className="heart-size fa">&#xf08a;<span>{this.state.count}</span></i></div>

        <ul>

        {this.state.comments.map(comment =>{

          return <Comment>

                  <strong>{comment.username}</strong> <CommentText>{comment.text}</CommentText>

                 </Comment>})}

        </ul>

        <form onSubmit = {this.addNewComment}>

          <CommentBox placeholder = "Add Comment..." onChange = {this.getNewComment} type = "text" name = "comment" value = {this.state.currentComment} />

          <CommentSubmit type = "submit" value = "Submit " />

        </form>

      </div>

    );

  };

}

export default CommentSection;
