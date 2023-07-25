import React, { useState , useEffect } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { format } from 'timeago.js';
import { Link } from "react-router-dom";
import API from "../../constants/api";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() =>{
    const fetchUser = async () =>{
      const res = await API.get(`/users/${post?.userId}`);
      setUser(res?.data?.user)
    }
    fetchUser();
  },[])
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-header-details">
            <Link to={`profile/${user?.username}`}>
                <img
                  src={user?.profilePicture || `${PF}person/noAvatar.png`}
                  alt="post-by"
                  className="round-image-2"
                />
            </Link>
            <span className="post-by-name">{user?.username}</span>
            <span className="post-by-time">{format(post?.createdAt)}</span>
          </div>
          <MoreVert />
        </div>
        <p className="post-description-text">{post?.desc}</p>
        <img src={`${PF}${post?.img}`} alt="" className="post-main-image" />
        <div className="post-footer">
          <div className="post-footer-left">
            <img
              src={`${PF}like.png`}
              alt="like-button"
              className="round-image-2"
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt="heart-button"
              className="round-image-2"
              onClick={likeHandler}
            />
            <p>{like} people liked </p>
          </div>
          <div className="post-footer-right">
            <span>{post?.comment}</span>
            <p>comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
