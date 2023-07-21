import React,{ useEffect, useState } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";
import API from "../../constants/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const fetchPosts = async () =>{
          const res = await API.get('/posts/timeline/64aa614f656c87df86bf54b8');
          setPosts(res?.data?.posts)
    }
    fetchPosts();
  },[]);

  return (
    <div className="feed-container">
      <Share />
      {posts.map((post,index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Feed;
