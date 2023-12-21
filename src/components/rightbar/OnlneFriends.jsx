import React from "react";
import { Users } from "../../dummyData";
import { Avatar } from "@mui/material";

const OnlneFriends = () => {
  return (
    <>
      <div className="online-friends">
        <div className="title">
          <ul className="rightItems" style={{ paddingTop: "25px" }}>
            <h3>Online Friends</h3>
            {Users.map((user) => {
              return (
                <li key={user.id} className="rightListItem">
                  <div className="avatar">
                    <Avatar className="per-img" src={user.profilePicture} />
                  </div>
                  <span className="rightListItemText">{user.username}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OnlneFriends;
