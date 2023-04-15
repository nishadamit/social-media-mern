import React from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed-container">
      <Share />
      {Posts.map((post) => (
        <Post post={post} key={post?.id} />
      ))}
    </div>
  );
};

export default Feed;
