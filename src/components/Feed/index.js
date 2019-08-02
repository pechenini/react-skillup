import React from "react";
import PostList from "../Post/PostList";
import "../../css/Feed.css";
import Menu from "./Menu";

const Feed = (props) => {
  return (
    <div className="feed-wrapper">
      <Menu {...props}/>
      <PostList />
    </div>
  );
};

export default Feed;
