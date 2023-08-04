import React,{useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";
import API from "../../constants/api";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { id } = useLocation().state;

  useEffect(() =>{
    const fetchUser = async () =>{
      const res = await API.get(`/users/${id}`);
      setUser(res?.data?.user);
    }
    fetchUser();
  },[id])

  return (
    <div>
      <Header />
      <div className="container profile-main-container">
        <Sidebar />
        <div className="profile-container">
          <div className="profile-container-top">
            <div className="profile-cover-image-container">
              <img 
                src={ user?.coverPicture ||`${PF}/person/noCover.png`} 
                alt="" 
                className="cover-image" 
              />
              <img
                src={user?.profilePicture ||  `${PF}/person/noAvatar.png`}
                alt=""
                className="profile-image"
              />
            </div>
            <div className="profile-info-container">
              <h2>{user?.username}</h2>
              <p>I am software engineer lives in texas</p>
            </div>
            <hr />
          </div>
          <div className="profile-container-bottom">
            <div className="profile-container-bottom-left">
              <Feed profile={true} userId ={id}/>
            </div>
            <div className="profile-container-bottom-right">
              <Rightbar profile={true} userId ={id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
