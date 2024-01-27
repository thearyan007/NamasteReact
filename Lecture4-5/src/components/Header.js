import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-FoodApp.png";

const Header = () => {
  const [Login, setLogin] = useState("Log-In");
  return (
    <div className="Header">
      <div className="logo-container">
        <img src={logo} alt="food-app Logo" />
      </div>
      <div className="nav-items">
        <ul>
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
