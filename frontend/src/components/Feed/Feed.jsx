import React from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="feed-container">
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
