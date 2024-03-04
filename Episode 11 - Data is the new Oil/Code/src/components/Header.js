//? Logo
import QuickEats from "../../images/QuickEats.png";

// !For Icons
import { FaHome } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useState } from "react";
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

  return (
    <div className="flex items-center justify-between mx-5 shadow-lg">
      <div className="logo-container h-28 w-28 ml-8 mix-blend-color-burn">
        <img className="logo" src={QuickEats} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex justify-center items-center mx-4">
          <Link to={"/"} className="ml-9 text-lg hover:text-[#fc8019]">
            <li className="flex items-center">
              <FaHome />
              <span className="ml-2">Home</span>
            </li>
          </Link>
          <Link to={"/offers"} className="ml-9 text-lg hover:text-[#fc8019]">
            <li className="flex items-center">
              <BiSolidOffer />
              <span className="ml-2">Offers</span>
            </li>
          </Link>
          <Link to={"help"} className="ml-9 text-lg hover:text-[#fc8019]">
            <li className="flex items-center">
              <IoMdHelpCircle />
              <span className="ml-2">Help</span>
            </li>
          </Link>
          <Link to={"about"} className="ml-9 text-lg hover:text-[#fc8019]">
            <li className="flex items-center">
              <BiSolidLogInCircle />
              <span className="ml-2">About</span>
            </li>
          </Link>
          <Link to={"/cart"} className="ml-9 text-lg hover:text-[#fc8019]">
            <li className="flex items-center">
              <IoFastFoodSharp />
              <span className="ml-2">Cart</span>
            </li>
          </Link>
          <li className="flex items-center mx-9 text-lg  border-2 border-slate-300 w-28 px-7  py-1 rounded-md hover:border-[#fc8019] text-black">
            <button
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
