import { useState } from "react";
const Form = () => {
  const hanldeOnclick = (e) => {
    e.preventDefault();
    show === false ? setShow(true) : setShow(false);
  };

  const [show, setShow] = useState(false);

  return (
    <div className="absolute top-[10%] left-[50%] translate-x-[-50%] after:absolute after:bg-black after:inset-0 after:opacity-80">
      <form
        action=""
        className=" text-white p-16 z-30 relative w-[28rem] h-[45rem]"
      >
        <h1 className="text-4xl font-bold pb-8">Sign In</h1>
        <div className="flex flex-col items-start justify-center">
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="mb-4 p-4 bg-transparent border-2 border-white rounded-lg w-72 h-14 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-4 bg-transparent border-2 border-white rounded-lg w-72 h-14 outline-none"
          />
          <button className="rounded-lg  mb-4 bg-[red] w-72 h-12 p-2 hover:bg-red-600 font-bold">
            Sign In
          </button>
          <div className="mb-4x m-auto">Forgot Password ?</div>
        </div>

        {/* Form Bottom */}
        <div className=" mt-20">
          <div className="flex items-center justify-start mb-2">
            <button className="p-2 border-2 border-white mr-3"></button>
            <div>Remember me </div>
          </div>
          <div className="pb-2">
            New to Netflix ? <span className="font-bold">Sign up now.</span>
          </div>
          <span className="text-sm">
            This page is protected by Google reCAPTCHA to <br /> ensure you're
            not a bot.{" "}
            <button
              onClick={hanldeOnclick}
              className="text-blue-600 hover:border-b-2 border-blue-600"
            >
              Learn more.
            </button>
          </span>
          {show && (
            <div className="mt-2 text-sm transition-all duration-200 ease-in-out">
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalised
              advertising by Google).
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Form;
