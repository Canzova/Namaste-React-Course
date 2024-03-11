import RestCard, { RestCardWithLabel } from "./RestCard";
import { Link } from "react-router-dom";

const RestList = ({ topRestaurantsList }) => {
  const RestCardVeg = RestCardWithLabel(RestCard);

  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-1">
      {topRestaurantsList.map((resturant) => {
        return (
          <Link
            key={resturant?.info?.id}
            to={"/restaurants/" + resturant?.info?.id}
          >
            {resturant?.info?.veg ? (
              <RestCardVeg restInfo={resturant} />
            ) : (
              <RestCard restInfo={resturant} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default RestList;
