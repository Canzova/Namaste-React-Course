import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Varibale
  const [topRestaurants, setTopRestaurants] = useState([]);

// useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // ------------- Getting live data from swiggy's API---------------
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.21290&lng=81.42940&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const JSON = await data.json();

     console.log(JSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setTopRestaurants(
      JSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // ------------- Filtering the top rated restraurants---------------
  const update = () => {
    const filterList = topRestaurants.filter((Restaurants) => {
      return Restaurants.info.avgRating >= 4.2;
    });
    // Updating the state variable
    setTopRestaurants(filterList);
  };

  // ------------- Shimmer UI & Conditional Rendering---------------
  if (topRestaurants.length === 0) {
    // Because topRestaurants is an array
    return (
      <div className="shimmer-container">
        {new Array(8).fill(undefined).map((ele,index) => {
          return <Shimmer key={index} />;
        })}
      </div>
    );
  }

  return (
    <div className="body">
      {/* <div className="search" onClick={()=>{
        update();
      }}></div> */}
      <div className="search" onClick={update}>
        <button>Top Rated Restaurants</button>
      </div>
      <div className="rest-container">
        {topRestaurants.map((resturant) => {
          return <RestCard key={resturant.info?.id} restInfo={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
