import React,{useEffect, useState } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import API from "../../constants/api";
import { getUserDetails } from "../../utils/user";
import NoDataComponent from "../NoDataComponent";

const Feed = ({profile = false, user}) => {
  const [posts, setPosts] = useState([]);
  const { _id  } = getUserDetails();
  useEffect(() =>{
    const fetchTimelinePosts = async () =>{
          try {
            const res = await API.get(`/posts/timeline/${_id}`);
            setPosts(res?.data?.posts)
          } catch (error) {
            console.error(error)
          }
    }

    const fetchUsersAllPost = async () =>{
      try {
        const res = await API.get(`/posts/profile/allpost/${user?._id}`);
        setPosts(res?.data?.posts);
      } catch (error) {
        console.log(error)
      }
    }
    
    if(profile){
      if(user?._id){
        fetchUsersAllPost()
      }
    }else{
      if(_id){
        fetchTimelinePosts();
      }
    }
  },[user?._id, _id, profile]);

  // console.log(loggedInUser, user)

  return (
    <div className="feed-container">
      <Share />
      {
        posts.length === 0 ?
        <NoDataComponent 
           title={'You have not post in your timeline!'}
        />
        :
        <div>
          {posts.map((post,index) => (
              <Post 
                  post={post} 
                  key={index}
                  profile={profile} 
              />
            ))}
        </div>
      }
    </div>
  );
};

export default Feed;
