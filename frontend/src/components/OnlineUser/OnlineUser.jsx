import React from "react";
import "./OnlineUser.css";

const OnlineUser = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li>
      <div className="list-item">
        <div className="image-container">
          <img
            src={`${PF}${user?.profilePicture}`}
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
