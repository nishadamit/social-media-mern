import React from "react";
import "./CloseFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebar-friend-list-item">
      <img
        src={user?.profilePicture}
        alt="friend"
        className="friend-list-img"
      />
      <span className="friend-list-name">{user?.username}</span>
    </li>
  );
};

export default CloseFriend;
