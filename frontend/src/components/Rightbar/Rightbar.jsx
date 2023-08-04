import React, { useEffect, useState } from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../OnlineUser/OnlineUser";
import API from '../../constants/api';

const HomeRightBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="birthday-container">
        <img src={`${PF}/gift.png`} alt="gift" />
        <p>
          <strong>Pola foster</strong> and <strong>3 other friends</strong> have
          birthday today.
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
    </>
  );
};

const ProfileRightBar = () => {
  const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() =>{
      const fetchUserFriends = async () =>{
          try {
            const response = await API.get("/users/friends");
            setFriends(response?.data?.friendList);
          } catch (error) {
            console.error(error)
          }
      }
      fetchUserFriends();
  },[])

  return (
    <div>
      <div className="profile-right-bar">
        <h2 className="title">User Information</h2>
        <div className="profile-info">
          <span>City</span>
          <span>New York</span>
        </div>
        <div className="profile-info">
          <span>From </span>
          <span>Australia</span>
        </div>
        <div className="profile-info">
          <span>Relationship</span>
          <span>Single</span>
        </div>
      </div>
      <div className="profile-friends">
        <h2>User friends</h2>
        <div className="profile-friends-list">
          {friends?.map((friend, index) => (
            <div className="profile-friend-list-item" key={index}>
              <img src={friend?.profilePicture ? `${PF}${friend?.profilePicture}` :  `${PF}person/noAvatar.png`} alt="profile pic" />
              <p>{friend?.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Rightbar = ({ profile }) => {

  return (
    <div className="rightbar">
      <div className="right-bar-wrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
