import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((Store) => Store.user);
  //console.log(user);

  const signOutFun = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out bro");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute top-0 px-40 z-30 flex justify-between items-center w-full">
      <img
        className="h-24 w-52 object-cover"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (<div onClick={signOutFun}>
        <img src={user.photoURL} alt="" />
      </div>)
 }
    </div>
  );
};

export default Header;
