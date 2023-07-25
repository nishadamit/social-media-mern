import React,{ useEffect, useState } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import API from "../../constants/api";

const Feed = ({profile = false}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const fetchTimelinePosts = async () =>{
          const res = await API.get('/posts/timeline/64aa614f656c87df86bf54b8');
          setPosts(res?.data?.posts)
    }

    const fetchUsersAllPost = async () =>{
        const res = await API.get('/posts/profile/allpost/64aa614f656c87df86bf54b8');
        setPosts(res?.data?.posts);
    }
    if(profile){
      fetchUsersAllPost()
    }else{
      fetchTimelinePosts();
    }
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
