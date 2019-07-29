import React from 'react'
import '../css/Post.css';

const Post = ({title, body}) => {
    return (
        <div className="post">
            <h1 className="post-header">{title}</h1>
            <p className="post-content">{body}</p>
        </div>
    )
}

export default Post;