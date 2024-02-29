import { useState } from "react";
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

  // Gettig data from our custom hook
  const [topRestaurants, topRestaurants2, isSearchNotFound] =
    useBody(searchText);

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
    return <OfflineStatus/>;
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
    <div className="body">
      <div className="search">
        <div className="search-ele">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(text) => {
              setsearchText(text.target.value);
            }}
          />
          <button
            className="login-btn"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="login-btn"
          onClick={update}
          style={{ width: btnText === "Back" ? "6rem" : "13rem" }}
        >
          {btnText}
        </button>
      </div>
      <div>
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
