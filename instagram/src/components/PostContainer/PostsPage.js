import React, { Component } from "react";
import dummyData from "../../dummy-data.js";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

// Searchbar and PostContainer are children of App Component
// App Component holds the state of the dummyData
// if this.setState is called then
// for search add  this to state object here.....filteredPosts: []

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
    console.log("data mounted", this.state);
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  logoutHandler = () => {
      localStorage.removeItem("userKey");
      window.location.reload();
    };
  render() {
    return (
      <div>
        <SearchBar
          searchPosts={this.searchPostsHandler}
          logout={this.logoutHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
