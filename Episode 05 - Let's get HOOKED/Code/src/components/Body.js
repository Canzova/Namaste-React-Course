import RestCard from "./RestCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Varibale
  const [topRestaurants, setTopRestaurants] = useState(restList);

  // ------------- Filtering the top rated restraurants---------------
  const update = () => {
    const filterList = topRestaurants.filter((Restaurants) => {
      return Restaurants.info.avgRating >= 4.5;
    });
    // Updating the state variable
    setTopRestaurants(filterList);
  };

  return (
    <div className="body">
      <div className="search" onClick={update}>
        <button>Top Rated Restaurants</button>
      </div>
      <div className="rest-container">
        {topRestaurants.map((resturant) => {
          return <RestCard key={restList.info?.id} restInfo={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
