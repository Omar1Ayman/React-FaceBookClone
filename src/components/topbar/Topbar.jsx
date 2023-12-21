import { Chat, NotificationAdd, Person, Search } from "@mui/icons-material";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <Link to="/">FaceBooClone</Link>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="icon-search" />
          <input
            placeholder="Serach fro freind,post or video"
            className="searcInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Homepage</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsActiveRoundedIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        <Link to="/profile/omar">
          <img
            src="/assets/person/2.jpg"
            alt="Profile"
            className="topbaImage"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
