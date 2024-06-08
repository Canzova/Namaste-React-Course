import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  return (
    <>
      <div className="relative">
        {/* The inset property in CSS is a shorthand for setting the top, right, bottom, and left properties all at once. It can be used to define the position of an element within its containing element.  */}
        <div className="after:absolute after:inset-0 after:bg-black after:opacity-40">
          <Header />
          <img
            className="transform origin-top"
            src={BG_IMG}
            alt="BG"
          />
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Login;
