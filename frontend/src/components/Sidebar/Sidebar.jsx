import React from "react";
import {
  RssFeed,
  Message,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  InsertInvitation,
  School,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Message className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircle className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutline className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutline className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <InsertInvitation className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className="sidebar-list-icon" />
            <span className="sidebar-list-item-text">Course</span>
          </li>
        </ul>
        <button className="sidebar-showmore-button">Show more</button>
        <hr className="sidebar-horizontal-line" />
        <ul className="sidebar-friend-list">
          {Users.map((user) => (
            <CloseFriend key={user?.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
