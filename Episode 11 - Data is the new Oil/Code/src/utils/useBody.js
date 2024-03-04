import { useState, useEffect } from "react";
const useBody = (searchText) => {
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.21290&lng=81.42940&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
  return [topRestaurants, topRestaurants2, isSearchNotFound];
};

export default useBody;
