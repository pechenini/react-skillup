import { ADD_POSTS, ADD_POST, DELETE_POST } from './postActionTypes'

export function addPosts(posts) {
    return {
        type: ADD_POSTS,
        payload: posts
    };
}

export function addPost(post) {
    return {
        type: ADD_POST,
        payload: post
    };
}

export function deletePost(index) {
    return {
        type: DELETE_POST,
        payload: index
    };
}