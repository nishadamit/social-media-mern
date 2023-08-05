import React, { useEffect, useState } from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import OnlineUser from "../OnlineUser/OnlineUser";
import API from '../../constants/api';
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { getUserDetails } from "../../utils/user";
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

const ProfileRightBar = ({user}) => {
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { _id: loggedInUserId, followings } = getUserDetails();
  const {_id } = user;

  const handleOnFollow = async() =>{
        try {
          const response = await API.put(`/users/followAndunfollow/${_id}`);
          console.log("response", response);
        } catch (error) {
          console.log(error);
        }
  }

  useEffect(() =>{
      const fetchUserFriends = async () =>{
          try {
            const response = await API.get(`/users/friends/${_id}`);
            setFriends(response?.data?.friendList);
          } catch (error) {
            console.error(error)
          }
      }
      if(_id){
        fetchUserFriends();
      }
  },[_id])

  useEffect(() =>{
        setFollowed(followings.includes(_id))
  },[followings, _id])

  console.log(followed)

  return (
    <div>
      <div className="profile-right-bar">
        {(loggedInUserId !== _id) && <button className="connectbutton" onClick={handleOnFollow}>
                                        { followed? 'Unfollow' :  'Follow' } 
                                        { followed? <Remove /> :  <Add /> } 
                                      </button>}
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
          <Link key={index} to={`/profile/${friend?.username}`} state={{id: friend?._id}}>
            <div className="profile-friend-list-item" key={index}>
              <img src={friend?.profilePicture ? `${PF}${friend?.profilePicture}` :  `${PF}person/noAvatar.png`} alt="profile pic" />
              <p>{friend?.username}</p>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Rightbar = ({ profile, user }) => {

  return (
    <div className="rightbar">
      <div className="right-bar-wrapper">
        {profile ? <ProfileRightBar user={user}/> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
