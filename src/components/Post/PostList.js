import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from '../../store/actions/posts';
import api from '../../utils/api.js'
import '../../css/PostList.css';
import Post from './Post.js';

function PostList() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const getPosts = () => api.get('/posts').then(data => dispatch(addPosts(data.data))); 
      
    useEffect(() => {
         getPosts();
    }, []);
    
    return (
        <div className="postList">
            { posts.map(post => <Post post={post} />) }
        </div>
    )
}

export default PostList;