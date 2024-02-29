import { useState, useEffect } from "react";
const User = ({ name, location, contact }) => {
  // Declare all your state variables and hooks in component and above return
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);


  return (
    <div className="user-conatiner">
      <div className="user-details">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact No : {contact}</h3>
        <h3>State Varibale one : {count}</h3>
        <h3>State Varibale two : {count2}</h3>
        <button
          onClick={() => {
            const temp = count + 1;
            setCount(temp);
          }}
        >
          Click me{" "}
        </button>
      </div>
    </div>
  );
};
export default User;
