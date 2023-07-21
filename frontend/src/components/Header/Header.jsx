import React from "react";
import { Search, Person, Message, Notifications } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/" style={{textDecoration: 'none'}}>
        <span>Connect Social</span>
        </Link>
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
            src={`${PF}person/1.jpeg`}
            alt="profile pic"
            className="round-image-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
