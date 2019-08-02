import React from "react";
import "../../css/Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">{post.title}</div>
      <span className="post-header-date">{post.created_at}</span>
      <p className="post-content">{post.content}</p>
      <div className="post-user">
        <img
          className="post-user-avatar"
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png"
          alt="avatar"
        />

        <div className="post-username">{post.user.name}</div>
      </div>
    </div>
  );
};

export default Post;
