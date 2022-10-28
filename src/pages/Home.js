import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../Search";
import logo from "../images/scout.png";

const Home = ({ toggleTheme, icon }) => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <button onClick={toggleTheme}>{icon}</button>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon className="appIcon" />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src={logo} alt="" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
