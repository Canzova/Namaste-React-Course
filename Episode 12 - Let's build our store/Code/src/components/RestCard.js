import { CDN_LINK } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const RestCard = (props) => {
  //? Destructuring our props
  const { restInfo } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = restInfo?.info;
  const { deliveryTime } = restInfo?.info.sla;
  return (
    <div className="flex flex-col h-[18rem] w-[15rem] hover:scale-[.97] rounded-3xl transition-all duration-100 ease-in-out">
      <div className=" h-[55%] rounded-3xl overflow-hidden">
        <img
          className=" object-cover rounded-3xl h-[100%] w-[100%]"
          src={CDN_LINK + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="my-2 font-custom hover:font-custom">
        <h3 className="font-bold">
          {name.length > 28 ? name.substring(0, 30) + "..." : name}
        </h3>
        <h5 className="flex justify-start items-center">
          {avgRating}
          <FaStar className=" mx-2 text-white rounded-lg bg-green-800 text-base border-2 border-green-800" />{" "}
          <span>{deliveryTime + " mins"}</span>
        </h5>
        <div className="cuisines">{cuisines.slice(0, 3).join(", ")}</div>
      </div>
    </div>
  );
};

// Higher order component

export const RestCardWithLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <div className="relative z-50">
          <div className="absolute flex justify-start items-center bg-green-800 rounded-lg shadow-inner px-2">
          <GiFruitBowl className="text-white text-2xl mr-2 " />
          <h3 className="text-xs text-white font-title">PURE VEG</h3>
          </div>
        </div>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
