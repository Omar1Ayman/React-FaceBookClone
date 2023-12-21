import React from "react";
import { Avatar, Button } from "@mui/material";
import Video from "@mui/icons-material/VideoLibrary";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
const Share = () => {
  return (
    <>
      {/*start add post section */}
      <div className="addPoost">
        <div className="enteryPost">
          <Avatar
            sx={{ width: 56, height: 56 }}
            src="/assets/person/1.jpg"
            alt="Person"
          />
          <input type="text" placeholder="What`s in your mind Omar? " />
        </div>
        <div className="entryMedia">
          <div className="entrymediaItems">
            <div className="entrymediaItem">
              <Video sx={{ color: "green" }} />
              Photo or Vdeo
            </div>
            <div className="entrymediaItem">
              <LabelImportantIcon sx={{ color: "blue" }} />
              Tag
            </div>
            <div className="entrymediaItem">
              <LocationOnIcon sx={{ color: "green" }} />
              Location
            </div>
            <div className="entrymediaItem">
              <GroupsIcon sx={{ color: "yellow" }} />
              Feelings
            </div>
          </div>
          <Button variant="contained">Share</Button>
        </div>
      </div>
      {/*end add post section */}
    </>
  );
};

export default Share;
