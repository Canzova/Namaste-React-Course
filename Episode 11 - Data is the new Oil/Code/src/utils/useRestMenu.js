import { useState, useEffect } from "react";
import { RESTMENU_URL } from "../utils/constants";

const useRestMenu = (restId) => {
  //? Our local state varibales
  const [restData, setrestData] = useState(null);
  const [offers, setOffers] = useState([]);
  const [dishList, setDishList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTMENU_URL + restId);

    const JSON = await data.json();

    // List of dishesh
    // console.log(JSON?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    const dish =
      JSON?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // console.log(dish);
    const updatedDishList = dish.filter((item, index) => {
      return(
        item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    });

    console.log(updatedDishList);

    setDishList(updatedDishList);

    // For name and etc
    setrestData(JSON?.data?.cards[0]?.card?.card?.info);

    // For Offers
    setOffers(
      JSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    // For Top Picks
    //console.log(JSON?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel)
  };

  return [restData, offers, dishList];
};
export default useRestMenu;
