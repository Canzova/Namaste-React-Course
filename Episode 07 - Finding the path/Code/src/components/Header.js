//? Logo
import QuickEats from "../../images/QuickEats.png";

// !For Icons
import { FaHome } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  /**
   *todo--> If there is not any dependency array in useEffect => useEffect's callback function will be called after every rendering
   *
   *?---> If there the dependency array is empty , then useEffect's callback function will be called only once in the initial rendering and not again.
   *
   *!---> If in the dependency array we have any state varibale then the useEffect's callback function will be called on 2 occations : 1. After the initial rendering, 2. Whenever their is a change in that state variable
   */

  const arr = useState("Login");
  const btn = arr[0];
  const setBtn = arr[1];

  //useEffect(()=>{console.log("useEffect Called")}, [btn]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={QuickEats} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li>
              <FaHome />
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/offers"}>
            <li>
              <BiSolidOffer />
              <span>Offers</span>
            </li>
          </Link>
          <Link to={"help"}>
            <li>
              <IoMdHelpCircle />
              <span>Help</span>
            </li>
          </Link>
          <Link to={"about"}>
            <li>
              <BiSolidLogInCircle />
              <span>About</span>
            </li>
          </Link>
          <Link to={"/cart"}>
            <li>
              <IoFastFoodSharp />
              <span>Cart</span>
            </li>
          </Link>
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
