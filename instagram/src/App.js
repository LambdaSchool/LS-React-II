import React, { Component } from 'react';
import SearchBar from '../src/Components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      likes: 370,
      filteredPosts: [],
      filterTarget: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({posts: dummyData});
    }, 450);
  }
  increment = prevState => {
    this.setState(prevState => ({likes: prevState.likes + 1}));
  }
  handleInput = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  filter = event => {
    this.handleInput(event); 
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter(post => {
        return post.username.includes(prevState.filterTarget);
      });
      return { filteredPosts: filteredPosts };
    });
  };

  render() {
    return (
      <div className='app-wrap'>
        <SearchBar changeHandler={this.filter}
          filterTarget={this.state.filterTarget}/>
        <PostContainer data={this.state.filteredPosts.length
        > 0 ? this.state.filteredPosts : this.state.posts} likes={this.state.likes} 
        increment={this.increment} />
      </div>
    );
  }
}

export default App;
