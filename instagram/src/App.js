import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';
import './components/PostContainer/PostContainer.css';



class App extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className = 'App-container'>
        <PostsPage/>

      </div>

    )

  }
}

export default Authenticate(App);

