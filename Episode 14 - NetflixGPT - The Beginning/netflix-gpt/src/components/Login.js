import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
const Login = () => {
  return (
    <div className="relative">
      {/* The inset property in CSS is a shorthand for setting the top, right, bottom, and left properties all at once. It can be used to define the position of an element within its containing element.  */}
      <div className="after:absolute after:inset-0 after:bg-black after:opacity-40">
        <Header />
        <img
          className="transform  origin-top"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="BG"
        />
      </div>
      <Form />
      <Footer/>
    </div>
  );
};

export default Login;
