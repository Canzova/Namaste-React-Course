import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { MdTimelapse } from "react-icons/md";
import Offer from "./Offer";
import { useParams } from "react-router-dom";
import { RESTMENU_URL } from "../utils/constants";
import Dishesh from "./Dishesh";

const RestMenu = () => {
  const [restData, setrestData] = useState(null);
  const [offers, setOffers] = useState([]);
  const [dishList, setDishList] = useState([]);

  const { restId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTMENU_URL + restId);

    const JSON = await data.json();

    // List of dishesh
    // console.log(JSON?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    const dish =
      JSON?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const updatedDishList = dish.slice(1).map((item) => {
      return item;
    });

    setDishList(updatedDishList);

    // For name and etc
    setrestData(JSON?.data?.cards[2]?.card?.card?.info);

    // For Offers
    setOffers(
      JSON?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    // For Top Picks
    //console.log(JSON?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel)
  };

  if (restData === null) {
    return <Shimmer />;
  }

  const {
    name,
    city,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
  } = restData;
  const {
    deliveryTime,
    minDeliveryTime,
    maxDeliveryTime,
    lastMileTravelString,
  } = restData?.sla;
  const { opened } = restData?.availability;
  const { message } = restData?.feeDetails;

  return (
    <div className="restMenu-container">
      <div className="rest-header">
        <h1>{name}</h1>
      </div>
      <div className="header-body">
        <div>
          <p className="rest-name">{name}</p>
          <p id="text">{cuisines.join(", ")}</p>
          <p id="text">
            {city}, {lastMileTravelString}
          </p>
          <p id="text" className="message">
            {" "}
            <ImLocation2 /> &nbsp;{message}
          </p>
        </div>
        <button className="star-rating">
          <span style={{ color: "green" }}>
            <FaStar /> &nbsp;{avgRating}
          </span>
          <span>{totalRatingsString}</span>
        </button>
      </div>

      <div className="offersBody">
        <span>
          <MdTimelapse /> &nbsp;{minDeliveryTime} - {maxDeliveryTime} MINS
        </span>
        <span>
          <TbCoinRupeeFilled /> &nbsp;{costForTwoMessage}
        </span>

        <Offer details={offers} />
      </div>

      <div className="dihesh">
        {dishList.map((item, index) => {
          return <Dishesh details={item?.card?.card} key={index} />;
        })}
      </div>
    </div>
  );
};
export default RestMenu;
