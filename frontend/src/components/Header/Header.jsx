import React from "react";
import { Search, Person, Message, Notifications } from "@mui/icons-material";
// import {}
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <span>Connect Social</span>
      </div>
      <div className="header-middle">
        <Search className="search-icon" />
        <input className="search-input" />
      </div>
      <div className="header-right">
        <div className="header-links">
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
        <div className="header-icons">
          <div className="icon-container">
            <Person className="icon" />
            <span>1</span>
          </div>
          <div className="icon-container">
            <Message className="icon" />
            <span>1</span>
          </div>
          <div className="icon-container">
            <Notifications className="icon" />
            <span>1</span>
          </div>
        </div>
        <div className="profile-image-container">
          <img
            src="assets/person/1.jpeg"
            alt="profile pic"
            className="round-image-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
