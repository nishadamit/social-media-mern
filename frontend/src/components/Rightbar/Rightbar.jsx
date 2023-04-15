import React from "react";
import "./Rightbar.css";

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
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="image-container">
                  <img
                    src="assets/person/1.jpeg"
                    alt="online friend"
                    className="round-image-4"
                  />
                  <div className="dot"></div>
                </div>
                <span> John Carter</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
