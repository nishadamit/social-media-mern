import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-header-details">
            <img
              src="assets/person/1.jpeg"
              alt="post-by"
              className="round-image-2"
            />
            <span className="post-by-name">Amit Nishad</span>
            <span className="post-by-time">5 minutes ago</span>
          </div>
          <MoreVert />
        </div>
        <p className="post-description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          itaque voluptate nemo totam nihil, quod eum amet nostrum sunt harum
          facilis, deleniti eos officiis vero eius pariatur, ex quibusdam unde
          alias mollitia molestias velit! Iste voluptatibus veniam, consectetur
          obcaecati facere exercitationem, molestias nihil modi porro tenetur
          fuga dolor molestiae id!
        </p>
        <img src="assets/person/1.jpeg" alt="" className="post-main-image" />
        <div className="post-footer">
          <div className="post-footer-left">
            <img
              src="assets/like.png"
              alt="like-button"
              className="round-image-2"
            />
            <img
              src="assets/heart.png"
              alt="heart-button"
              className="round-image-2"
            />
            <p>32 people liked </p>
          </div>
          <div className="post-footer-right">
            <span>32</span>
            <p>comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
