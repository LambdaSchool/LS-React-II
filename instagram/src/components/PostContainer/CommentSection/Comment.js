import React from 'react';

const Comment= props => { 
    return (
        <div>
            {props.comments.map(comments => {
                return (
                    <div>
                        <h5>{comments.username}</h5>
                        <p>{comments.text}</p>
                        <input type='text' placeholder ='Add a comment...'></input>
                    </div>
                );
            })}
        </div>
    );
}

export default Comment;