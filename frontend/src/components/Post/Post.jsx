import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const user = Users.find((item) => item?.id === post?.id);
  const [like, setLike] = useState(post?.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-header-details">
            <img
              src={user?.profilePicture}
              alt="post-by"
              className="round-image-2"
            />
            <span className="post-by-name">{user?.username}</span>
            <span className="post-by-time">{post?.date}</span>
          </div>
          <MoreVert />
        </div>
        <p className="post-description-text">{post?.desc}</p>
        <img src={post?.photo} alt="" className="post-main-image" />
        <div className="post-footer">
          <div className="post-footer-left">
            <img
              src="assets/like.png"
              alt="like-button"
              className="round-image-2"
              onClick={likeHandler}
            />
            <img
              src="assets/heart.png"
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
