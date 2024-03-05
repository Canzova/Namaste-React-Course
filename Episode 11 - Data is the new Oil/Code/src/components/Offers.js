import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Offers = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h1>I am Offers Page</h1>
      <h1 className="font-bold text-lg">User Name : {userName}</h1>
    </div>
  );
};
export default Offers;
