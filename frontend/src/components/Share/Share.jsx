import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./Share.css";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share-container">
      <div className="share-container-wrapper">
        <div className="share-top">
          <img src={`${PF}person/1.jpeg`} alt="" className="round-image-3" />
          <input
            className="share-top-input-box"
            placeholder="What's on your mind, Amit?"
          />
        </div>

        <hr className="share-horizontal-bar" />
        <div className="share-bottom">
          <div className="share-icon-list">
            <div className="share-icon-container">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-icon-text">Photo or Video</span>
            </div>
            <div className="share-icon-container">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-icon-text">Tag</span>
            </div>
            <div className="share-icon-container">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-icon-text">Location</span>
            </div>
            <div className="share-icon-container">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-icon-text">Feelings</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
