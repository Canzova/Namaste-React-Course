import { useState, useRef } from "react";
import { formSubmission } from "../utils/formSubmission";
const Form = () => {
  const [show, setShow] = useState(false);
  const [signIn, setsignIn] = useState("Sign In");
  const [errorMessage, seterrorMessage] = useState(null);
  const [newNetflix, setnewNetflix] = useState([
    "New to Netflix ?",
    "Sign Up now.",
  ]);

  // Declring useRef
  const email = useRef();
  const password = useRef();

  const hanldeOnclick = (e) => {
    e.preventDefault();
    show === false ? setShow(true) : setShow(false);
  };

  const togglesignUp = () => {
    signIn === "Sign In" ? setsignIn("Sign Up") : setsignIn("Sign In");
    newNetflix[0] === "New to Netflix ?"
      ? setnewNetflix(["Already registered", "Sign In now."])
      : setnewNetflix(["New to Netflix ?", "Sign Up now."]);
  };

  // Authentication
  const handleFormSubmission = (e) => {
    //e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    let data = null;
    if (email.current.value.length !== 0) {
      data = formSubmission(email.current.value, password.current.value);
    }
    //console.log(data);
    seterrorMessage(data);
  };

  return (
    // Insted of using ::after you can simply give a background to this and set bg-opacity as 60% or something
    <div className="absolute top-[10%] left-[50%] translate-x-[-50%] after:absolute after:bg-black after:inset-0 after:opacity-80">
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="text-white pt-4 pb-2 px-10 z-30 relative w-[28rem]"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold pt-0 pb-4">{signIn}</h1>
          {signIn === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              className="mb-2 p-2 bg-[#272936] border-[1px] border-white rounded-md w-[100%] h-12 outline-none"
              required
            />
          )}

          {/* <input
            type="text"
            placeholder="First Name"
            className={`mb-2 p-2 bg-[#272936] border-[1px] border-white rounded-md  w-[100%] h-12 outline-none  ${ signIn === 'Sign Up' ? 'block' : 'hidden'}`}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={`mb-2 p-2 bg-[#272936] border-[1px] border-white rounded-md  w-[100%] h-12 outline-none  ${ signIn === 'Sign Up' ? 'block' : 'hidden'}`}
          /> */}
          <input
            ref={email}
            type="email"
            placeholder="Email or Phone Number"
            className="mb-2 p-2 bg-[#272936] border-[1px] border-white rounded-md  w-[100%] h-12 outline-none"
            required
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-2 p-2 border-[1px] border-white rounded-md  w-[100%] h-12 outline-none bg-[#272936]"
          />
          <div className="text-sm text-[red] mb-2 text-center">
            {errorMessage}
          </div>
          <button
            className="rounded-md   mb-2 bg-[red] w-[100%] h-12 py-2 hover:bg-red-600 font-bold"
            onClick={handleFormSubmission}
          >
            {signIn}
          </button>
          <div className="mb-2 m-auto">Forgot Password ?</div>
        </div>

        {/* Form Bottom */}
        <div className="mt-7 pb-2">
          <div className="flex items-center justify-start mb-2">
            <button className="p-2 border-[1px] border-white mr-3"></button>
            <div>Remember me </div>
          </div>
          <div className="pb-2">
            {newNetflix[0] + " "}
            <span
              className="font-bold hover:border-b-2 border-white cursor-pointer"
              onClick={togglesignUp}
            >
              {newNetflix[1]}
            </span>
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

          <div
            className={`mt-2 text-sm transition-opacity duration-300 ease-in-out ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalised
            advertising by Google).
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
