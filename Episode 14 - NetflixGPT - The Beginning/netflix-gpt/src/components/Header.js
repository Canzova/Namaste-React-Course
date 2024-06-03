import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETF_LOGO, USER_LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((Store) => Store.user);
  //console.log(user);

  const signOutFun = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out bro");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //console.log("Header is rendered");

  // We are adding the onAuthStateChnaged (Kind of event listner) only once when our app renders initially

  // When we are moving from login page to browse page, the login page gets unmounted and browse page gets mounted, now inside the browse page we have header, so header again gets mounted into the dom and due to this mounting header component is again re rendered

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 px-40 z-30 flex justify-between items-center w-full">
      <img
        className="h-24 w-52 object-cover"
        src={NETF_LOGO}
        alt="Company Logo"
      />
      {user && (
        <div className="flex items-center">
          <img
            className="h-10 w-10 mx-4 rounded-md"
            src={USER_LOGO}
            alt="user Logo"
          />
          <p
            className="text-lg font-medium cursor-pointer z-10 text-white"
            onClick={signOutFun}
          >
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
