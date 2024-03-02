import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import React from "react";
import NotFound from "./NotFound";
import RestList from "./RestList";
import useBody from "../utils/useBody";
import useInternetStatus from "../utils/useInternetStatus";
import OfflineStatus from "./OfflineStatus";

const Body = () => {
  // State Varibale
  const arr = useState("Top Rated Restaurants");
  const btnText = arr[0];
  const setBtnText = arr[1];
  const [searchText, setsearchText] = useState("");
  const [topRestaurants, setTopRestaurants] = useState([]);
  // Below state varible will always conatin the actual data which we are getting from the out API
  const [topRestaurants2, setTopRestaurants2] = useState([]);
  const [isSearchNotFound, setIsSearchNotFound] = useState(false);

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  const handleSearch = () => {
    // -------------------------Filtering the data on serach---------------------------
    const filteredData = topRestaurants2.filter((restaurant) => {
      return restaurant?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    // Because for sometime till topRestaurants2 is not loaded from api, it will be empty and thats why filterData will also be empty, and if i not write topRestaurants2.length != 0, then setIsSearchNotFound will become true and NotFound component will get loaded
    filteredData.length === 0 && topRestaurants2.length != 0
      ? setIsSearchNotFound(true)
      : setIsSearchNotFound(false);
    setTopRestaurants(filteredData);
  };

  // ------------- Getting live data from swiggy's API---------------
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //console.log(data);
    const JSON = await data.json();

    // console.log(
    //   JSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setTopRestaurants(
      JSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopRestaurants2(
      JSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // ------------- Filtering the top rated restraurants---------------
  const update = () => {
    const filterList = topRestaurants2.filter((Restaurants) => {
      return Restaurants.info.avgRating >= 4.4;
    });

    if (btnText === "Top Rated Restaurants") {
      setBtnText("Back");
      // Updating the state variable
      setTopRestaurants(filterList);
      // console.log(filterList);
    } else {
      setBtnText("Top Rated Restaurants");
      // Fetching data again to get un-filtered list of restraunts
      setTopRestaurants(topRestaurants2);
      // console.log(topRestaurants2);
    }
  };

  const internetStatus = useInternetStatus();

  // Offline - Online
  if (internetStatus === false) {
    return <OfflineStatus />;
  }

  // ------------- Shimmer UI & Conditional Rendering---------------
  if (topRestaurants.length === 0 && isSearchNotFound === false) {
    // Because topRestaurants is an array
    return (
      <React.Fragment>
        <div className="shimmer-container">
          {new Array(8).fill(undefined).map((ele, index) => {
            return <Shimmer key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="mx-20 my-8">
      <div className="flex justify-between mx-20">
        <div className="">
          <input
            type="text"
            className="border-2 border-slate-300 rounded-md focus:outline-none px-3 focus:border-[#fc8019] py-1"
            value={searchText}
            onChange={(text) => {
              setsearchText(text.target.value);
            }}
          />
          <button
            className="mx-4 "
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-2 border-slate-300 w-40 px-3  py-1 rounded-md hover:border-[#fc8019] text-black"
          onClick={update}
          style={{ width: btnText === "Back" ? "6rem" : "13rem" }}
        >
          {btnText}
        </button>
      </div>
      <div className="my-8 mx-20">
        {!isSearchNotFound ? (
          <RestList topRestaurantsList={topRestaurants} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Body;
