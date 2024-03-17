import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-FoodApp.png";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [Login, setLogin] = useState("Log-In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-[#C2CCC5] shadow-2xl items-center">
      <img className="w-[125px]" src={logo} alt="food-app Logo" />

      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="p-2 m-2 text-lg text-center">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-2 m-2 text-lg text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 text-lg text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2 text-lg text-center">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2 text-lg text-center">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2 text-lg text-center">
            <Link to="#">Cart</Link>
          </li>
          <button
            className="login-btn p-2 m-2 text-lg text-center"
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
