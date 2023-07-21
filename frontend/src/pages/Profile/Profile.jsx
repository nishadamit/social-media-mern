import React from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <Header />
      <div className="container profile-main-container">
        <Sidebar />
        <div className="profile-container">
          <div className="profile-container-top">
            <div className="profile-cover-image-container">
              <img src={`${PF}post/7.jpeg`} alt="" className="cover-image" />
              <img
                src={`${PF}/person/4.jpeg`}
                alt=""
                className="profile-image"
              />
            </div>
            <div className="profile-info-container">
              <h2>Albert Rockson</h2>
              <p>I am software engineer lives in texas</p>
            </div>
            <hr />
          </div>
          <div className="profile-container-bottom">
            <div className="profile-container-bottom-left">
              <Feed />
            </div>
            <div className="profile-container-bottom-right">
              <Rightbar profile={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
