import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Contact from "../../components/contact/Contact";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
const Profile = () => {
  return (
    <>
      <Topbar />
      <main className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileTop">
            <img
              className="profileCoverImage"
              src="/assets/post/3.jpg"
              alt=""
            />
            <img
              className="profilePersonImage"
              src="/assets/person/2.jpg"
              alt=""
            />
            <div className="profileInfo">
              <h4 className="profileInfoName">Omar Ayman</h4>
              <span className="profileInfoDesc">no pain no gain</span>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
