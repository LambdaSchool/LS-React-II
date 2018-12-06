import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CommentSection.css';
import heart from '../../assets/insta-heart.png';
import reply from '../../assets/insta-reply.PNG';  // For some reason, caps required for png
import commentOptions from '../../assets/insta-comment.PNG';
import Comment from '../Comment/Comment';

const CommentSection = props => (
    <div className="comments">
        <div className="comment-icons">
            <img src={heart} alt="fave button" draggable="false" />
            <img src={reply} alt="reply button" draggable="false" />
        </div>
        <h5>{props.likes} like{props.likes !== 1 ? 's':null}</h5>
        <div className="comment-list">
            {props.comments.map(comment => <Comment key={comment.username + comment.text} name={comment.username} text={comment.text} />)}
        </div> {/* Really bad key, above.  Would probably assign ID's to comments in practice. */}
        <p className="date">{moment(props.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</p>
        <div className='add-comment'>
            <input 
                type='text' 
                placeholder='Add a Comment...' 
                value={props.commentValue} 
                onChange={props.onCommentChange} 
                onKeyDown={ (e) => { if(e.keyCode===13) props.onAddComment(props.id) } }
            />
            <img src={commentOptions} 
                alt='Comment options button' 
                onClick={() => props.onAddComment(props.id)}
                draggable="false"
            />
        </div>
    </div>
);

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    likes: PropTypes.number,
    time: PropTypes.string,
    commentValue: PropTypes.string,
    onCommentChange: PropTypes.func,
    onAddComment: PropTypes.func,
    id: PropTypes.string,
};

export default CommentSection;