import React from 'react';
import PostInstance from '../PostInstance/PostInstance.js'
//import Comment from '../CommentSection/Comment.js'
//import CommentFeed from '../CommentSection/CommentFeed.js';
//import CommentFeed from '../CommentSection/CommentFeed.js'


const PostStream= props => {
let currentPostArray = props.filteredPosts.map(item => {
 return <PostInstance key={item.likes} username={item.username} imageUrl={item.imageUrl} thumbnailUrl={item.thumbnailUrl} likes={item.likes} timestamp={item.timestamp} commentsArray={item.comments} commentsUpdater={this.props.commentsUpdater} commentsEventHandler={this.props.commentsEventHandler}/>
}   
);

console.log(currentPostArray)
 //


  return (
    <div id="postStream">
     PostStream
     {currentPostArray}
    </div>
  );
};

export default PostStream;


//}  posts={this.state.posts} filteredPosts={props.filteredPosts}