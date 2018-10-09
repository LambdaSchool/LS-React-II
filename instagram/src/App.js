import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/seachbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends Component {
  constructor(){
    super()
    this.state={
      userData: [],
    };
  console.log(this.state);
  
  }

  componentDidMount() {
        setTimeout(() => {
      this.setState({ userData: dummyData });
    }, 800);
  }
  

 
  render() {
    return (
      <div className="App">

      <SearchBar />
      <PostContainer userData={this.state.userData}/>
          
        
        
      </div>
    );
  }
}

export default App;
