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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
