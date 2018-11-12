import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import shortid from 'shortid';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: dummyData
        };
    }
    render() {
        return (
            <div className="App">
                <SearchBar />
                {this.state.posts.map(post => (
                    <PostContainer post={post} key={shortid.generate()} />
                ))}
            </div>
        );
    }
}

export default App;
