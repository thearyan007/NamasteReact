import { useState } from "react";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
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
