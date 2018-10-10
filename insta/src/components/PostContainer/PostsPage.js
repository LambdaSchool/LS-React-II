import React from 'react'
import './PostContainer.css'
import dummyData from '../../dummy-data'
import SearchBar from "../SearchBar/searchBar";
import PostContainer from './PostContainer'


class PostsPage extends React.Component {
    constructor(){
      super();
      this.state ={
        posts: [],
        searchReturn: [],
        searchInput: ''
      }
    }
  
   
  
    componentDidMount = () =>{
      this.setState({
        posts: dummyData,
        searchReturn: dummyData
      })
    }
   changeHandler=(e)=>{
    this.setState({searchInput: e.target.value}, this.searchPostforUser()
    );}
  
    searchPostforUser=()=>{
     this.setState({searchReturn: this.state.posts.filter(item =>{return item.username.toLowerCase().includes(this.state.searchInput.toLocaleLowerCase())}), searchInput: ''})
    }
  
    render() {
      return (
        <div className="App">
          <SearchBar change={this.changeHandler} value={this.state.searchInput}/>
          <div className="post-container">
            {this.state.searchInput.length?this.state.searchReturn.map(item =>{
              return(
              <PostContainer key={item.timestamp} obj={item} />
              )}):this.state.posts.map(item =>{
              return(
              <PostContainer key={item.timestamp} obj={item} />
              )})}
          </div>
          </div>
        );
    }
  }
  export default PostsPage;