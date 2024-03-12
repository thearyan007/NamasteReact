import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-FoodApp.png";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [Login, setLogin] = useState("Log-In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="Header">
      <div className="logo-container">
        <img src={logo} alt="food-app Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="#">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              Login == "Log-Out" ? setLogin("Log-In") : setLogin("Log-Out");
            }}
          >
            {Login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
