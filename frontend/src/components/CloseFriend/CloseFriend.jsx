import React from "react";
import "./CloseFriend.css";

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebar-friend-list-item">
      <img
        src={`${PF}${user?.profilePicture}`}
        alt="friend"
        className="friend-list-img"
      />
      <span className="friend-list-name">{user?.username}</span>
    </li>
  );
};

export default CloseFriend;
