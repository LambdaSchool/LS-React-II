import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import Header from './Components/SearchBar/Header';

/* Come back to this later.
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
*/

import './Reset.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.postNumber = 0;
    this.state = {
      data: dummyData,
    }
    this.username = "C137";
    this.commentText = "Add a comment...";
  
  }

  addCommentClickHandler = (postID) => {
    if (this.commentText === 'Add a comment...') {
      return;
    }

    let username = this.username;
    let text = this.commentText;

    let comment = {username, text};
    console.log(comment);
    this.setState ({
      data: this.state.data.map(data => {
        if (data.timestamp === postID) {
          data.comments.push(comment);
          return data;
        }
        return data;
      })
    })
  }

  commentTextOnChange = (event) => {
    this.commentText = event.target.value;
    console.log(this.commentText, " ", event.target.value);
  }

  likeClickHandler = (postID) => {
    this.setState({
      data: this.state.data.map(data => {
        if (data.timestamp === postID) {
          data.likes++;
          return data;
        }
        else { return data }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
      {this.state.data.map(data => {
        
        return (
          <PostContainer 
          likeClickHandler={this.likeClickHandler}
          username={data.username} 
          thumbnailUrl={data.thumbnailUrl}
          imageUrl={data.imageUrl}
          likes={data.likes}
          comments={data.comments}
          timestamp={data.timestamp}
          clickHandler={this.likeClickHandler}
          commentTextOnChange={this.commentTextOnChange}
          addCommentClickHandler={this.addCommentClickHandler}
          commentText={this.commentText}
          />
        )
      })}
      
      </div>
    );
  }
}

export default App;
