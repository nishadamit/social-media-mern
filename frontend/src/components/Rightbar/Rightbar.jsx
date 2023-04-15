import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../OnlineUser/OnlineUser";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="right-bar-wrapper">
        <div className="birthday-container">
          <img src="assets/gift.png" alt="gift" />
          <p>
            <strong>Pola foster</strong> and <strong>3 other friends</strong>{" "}
            have birthday today.
          </p>
        </div>
        <img src="assets/ad.png" alt="gift" className="ad-image" />
        <div className="online-friend-container">
          <p className="online-friend-heading">Online Friends</p>
          <ul className="online-friend-list">
            {Users.map((user) => (
              <OnlineUser key={user?.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
