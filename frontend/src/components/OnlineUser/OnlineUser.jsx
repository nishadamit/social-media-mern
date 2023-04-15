import React from "react";
import "./OnlineUser.css";

const OnlineUser = ({ user }) => {
  return (
    <li>
      <div className="list-item">
        <div className="image-container">
          <img
            src={user?.profilePicture}
            alt="online friend"
            className="round-image-4"
          />
          <div className="dot"></div>
        </div>
        <span>{user?.username}</span>
      </div>
    </li>
  );
};

export default OnlineUser;
