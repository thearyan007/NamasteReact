import logo from "../assets/Logo-FoodApp.png";

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

export default Header;
