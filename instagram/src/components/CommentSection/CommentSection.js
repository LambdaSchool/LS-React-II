import React from 'react';
import Comment from './Comment'
import './CommentSection.css';

const CommentSection = props => {
    return (
          <div className="comment-section">
            <div className="comment-section-icons">

            <a href="#"><svg className="like-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"></path></svg></a>
            
            <a href="#"><svg className="comment-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M256 64c123.5 0 224 79 224 176S379.5 416 256 416c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176m0-32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg></a>

            </div>
            <div className="likes">
                <p>{props.likes} likes</p>
            </div>

            {props.comments.map(comment => {
                return <Comment 
                username={comment.username} 
                text={comment.text}
                />
            }
            )}
            <div className= "comment-input">
                <input value="Add a comment..." /><span class="ellipsis">···</span>
            </div>
        </div>
        
    )
}

export default CommentSection;