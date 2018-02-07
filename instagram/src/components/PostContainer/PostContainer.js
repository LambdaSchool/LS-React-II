import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    props.dd.map((post, index) => {
    return (
        <div className="postStyle"  key={index}>
        <div><img className="thumbnail" src={post.thumbnailUrl}/></div><div>{post.username}</div>
        <img className="postImage" src={post.imageUrl}/>
        <CommentSection arrComments={post.comments} />
      </div>
    )
      }));
  
  }
export default PostContainer;