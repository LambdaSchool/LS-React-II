import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         posts: []
    //     };
    // }

    // componentDidMount = (props) => {
    //     // let posts = { props };
    //     const { posts } = this.props.postData;
    //     this.setState({ posts });
    // }

    render() {
        console.log('this is ', this.props);
        return (
            <div className="post-container">
                {/* {[...this.props]} */}
                {/* {[...this.state].map((post, index) => (
                <div>{post[index].username}</div>
            ))} */}
                <div>
                    {[...this.props.postData.username]}
                </div>
                <div>
                    {[...this.props.postData.likes.toString()]}
                </div>
                <CommentSection />
            </div>
        )
    }
}

export default PostContainer;