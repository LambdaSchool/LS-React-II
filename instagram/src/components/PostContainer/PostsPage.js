import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PostContainerList from '../PostContainer/PostContainerList';
import Header from '../Header/Header';
import styled from 'styled-components';

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivAppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
class PostsPage extends Component {
  constructor(props){
    super(props);
    this.userPosts = props.userPosts;
    this.state = {
      usr: props.loginUsr,
      data: [],
      newComment: '',
      searchText: ''
    };
  }

  componentDidMount() {
    this.setState({data: this.userPosts});
  }

  handleChange = e => {
    let newKeyValue = e.target.value;
    this.setState({
      [e.target.name]: newKeyValue
    });
  }

  getSelectedPost = (state, selectedPostUsr) => {
    let postFound = {};
    state.data.forEach(post => {
      if (post.username === selectedPostUsr){
        postFound = post;
      }
    });
    return postFound;
  }

  addNewComment = (event, postUsr, cmtUsr, dateTime) => {
    event.preventDefault();
    
    let selectedPost = this.getSelectedPost(this.state, postUsr);
    if (selectedPost === undefined || selectedPost === null){
      console.error("Post Username Not Found");
    } else {
      let newComment = {
        username: cmtUsr,
        timestamp: dateTime,
        text: this.state.newComment
      }
      selectedPost.comments.push(newComment);
  
      let newData = this.state.data.map(post => {
        if (post.username === selectedPost.username){
          return selectedPost;
        } else {
          return post;
        }
      });
  
      this.setState({
        data: newData,
        newComment: '',
        ...this.state.searchText
      });
      event.target.querySelector('textarea').value = '';
    }
  };

  incrementLikes = (event, postUsr) => {
    event.preventDefault();

    let selectedPost = this.getSelectedPost(this.state, postUsr);
    if (selectedPost === undefined || selectedPost === null){
      console.error("Post Username Not Found");
    } else {
      let newData = this.state.data.map(post => {
        if (post.username === selectedPost.username){
          selectedPost.likes = selectedPost.likes + 1;
          return selectedPost;

        } else {
          return post;
        }
      });
  
      this.setState({
        data: newData,
        ...this.state.newComment,
        ...this.state.searchText
      });
    }
  }

  setSearchResults = e => {
    e.preventDefault();
    const postsFound = this.userPosts.filter(post => post.username.toUpperCase().includes(e.target.value.toUpperCase()));
    this.setState({
      data: postsFound
    })
  }

  render() {
    return (
      <div>
        <Header setSearchResults={this.setSearchResults} user={this.state.usr} />
        <DivAppContainer>
          <PostContainerList
          data={this.state.data}
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          incrementLikes={this.incrementLikes}
        />
        </DivAppContainer>
      </div>
    )
  };
}

// PostsPage.propTypes = {
//   comment: PropTypes.objectOf(PropTypes.string)
// }

export default PostsPage;