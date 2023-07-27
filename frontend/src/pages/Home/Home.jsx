import React from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="container home-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
