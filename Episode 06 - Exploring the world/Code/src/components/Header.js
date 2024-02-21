//? Logo
import QuickEats from "../../images/QuickEats.png";

// !For Icons
import { FaHome } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  // console.log("Re-Rendered");
  const arr = useState("Login");
  const btn = arr[0];
  const setBtn = arr[1];
  return (
    <div className="header">
      {/* <div className="header" style={headerStyle}> */}
      <div className="logo-container">
        <img className="logo" src={QuickEats} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <a href="#">
            <li>
              <FaHome />
              <span>Home</span>
            </li>
          </a>
          <a href="#">
            <li>
              <BiSolidOffer />
              <span>Offers</span>
            </li>
          </a>
          <a href="#">
            <li>
              <IoMdHelpCircle />
              <span>Help</span>
            </li>
          </a>
          <a href="#">
            <li>
              <BiSolidLogInCircle />
              <span>Sign In</span>
            </li>
          </a>
          <a href="#">
            <li>
              <IoFastFoodSharp />
              <span>Cart</span>
            </li>
          </a>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                setBtn(btn === "Login" ? "Logout" : "Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
