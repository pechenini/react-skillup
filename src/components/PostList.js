import React from 'react'
import api from '../utils/api.js'
import '../css/PostList.css';
import Post from './post.js';

class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        };
    }
    
    componentDidMount() {
        api.get('/posts').then(data => {
            this.setState({ posts: data.data })
        })    
    }
    
    render() {
        return (
            <div className="postList">
                { this.state.posts.map(post => Post(post)) }
            </div>
        )
    }
}

export default PostList;