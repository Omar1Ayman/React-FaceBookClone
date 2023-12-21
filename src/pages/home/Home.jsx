import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Contact from "../../components/contact/Contact";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <main className="main">
        <Sidebar />
        <Feed />
        <Rightbar />
      </main>
    </>
  );
};

export default Home;
