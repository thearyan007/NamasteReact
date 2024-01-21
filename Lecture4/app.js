import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Lecture4/assets/Logo-FoodApp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
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
      </ul>
    </div>
  </div>
);

const Restaurants = (props) => (
  <div className="restaurant">
    <img
      src="https://kotart.in/cdn/shop/products/Kotart-Restaurant-Gallery-Wall-Art-Frame-Combo-Set-of-8-5.jpg"
      alt="resto-Image"
    />
    <h3>{props.restoName}</h3>
    <h4>Rating:{props.rating} </h4>
    <h4>{props.address}</h4>
  </div>
);

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="restaurants-container">
        <Restaurants restoName="restro-1" rating="⭐⭐⭐" address="add-1" />
        <Restaurants restoName="restro-2" rating="⭐⭐⭐⭐" address="add-2" />
        <Restaurants restoName="restro-3" rating="⭐⭐" address="add-3" />
      </div>
    </div>
  );
};

const Footer = () => {
  return;
};

const AppLayout = () => (
  <div className="AppLayout">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
