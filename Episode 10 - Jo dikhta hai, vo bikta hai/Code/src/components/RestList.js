import RestCard from "./RestCard";
import { Link } from "react-router-dom";
const RestList = ({ topRestaurantsList }) => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-1">
      {topRestaurantsList.map((resturant) => {
        return (
          <Link
            key={resturant.info?.id}
            to={"/restaurants/" + resturant.info?.id}
          >
            <RestCard restInfo={resturant} />
          </Link>
        );
      })}
    </div>
  );
};

export default RestList;
