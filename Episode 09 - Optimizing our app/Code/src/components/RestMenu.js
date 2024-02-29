//! Our Hooks
import { useParams } from "react-router-dom";

//! Our Supporting Components/Utils
import Offer from "./Offer";
import Shimmer from "./Shimmer";
import Dishesh from "./Dishesh";
import useRestMenu from "../utils/useRestMenu";

//! Our Icons
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { MdTimelapse } from "react-icons/md";

const RestMenu = () => {
  const { restId } = useParams();

  // Using custom hook
  const [restData, offers, dishList] = useRestMenu(restId);

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
