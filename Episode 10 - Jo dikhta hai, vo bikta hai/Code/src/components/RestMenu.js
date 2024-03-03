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
    <div className="mx-52 my-10">
      <div className="flex flex-col justify-center items-between">
        <h1 className="font-title font-bold text-xl text-gray-800">{name}</h1>
        <div className="flex justify-between items-start border-b-[.5px] border-dashed border-[#d5d6df]">
          <div className="text-sm text-[#7e808c] ">
            <p id="text">{cuisines.join(", ")}</p>
            <p id="text">
              {city}, {lastMileTravelString}
            </p>
            <p className="flex justify-start text-center my-6">
              <ImLocation2 /> &nbsp;{message}
            </p>
          </div>
          <button className="flex justify-center flex-col border-2 border-slate-200 rounded-md p-[0.4rem 0.2rem] py-1 items-center">
            <span className="flex justify-center items-center text-green-800 p-2 font-bold">
              <FaStar /> &nbsp;{avgRating}
            </span>
            <span className="border-t-2 border-b-slate-200 text-[.6rem] text-[#7e808c] py-2  font-bold px-2">
              {totalRatingsString}
            </span>
          </button>
        </div>
      </div>

      <div className="offersBody">
        <div className="flex justify-start items-center my-6">
          <span className="flex items-center mr-5 text-[#3e4152] font-bold font-title text-lg">
            <MdTimelapse className="inline-block text-2xl" /> &nbsp;{minDeliveryTime} -{" "}
            {maxDeliveryTime} MINS
          </span>
          <span className="flex items-center text-[#3e4152] font-bold font-title text-lg">
            <TbCoinRupeeFilled className="inline-block text-2xl" /> &nbsp;
            {costForTwoMessage}
          </span>
        </div>

        <div>
        <Offer details={offers} />
        </div>
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
