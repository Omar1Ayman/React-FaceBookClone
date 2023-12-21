import { Users } from "../../dummyData";
import HomeRightBar from "./HomeRghtbar";
import OnlneFriends from "./OnlneFriends";
import ProfileRightbar from "./ProfileRightbar";
import "./rightbar.css";

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
