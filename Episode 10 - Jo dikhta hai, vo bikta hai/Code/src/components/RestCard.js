import { CDN_LINK } from "../utils/constants";

const RestCard = (props) => {
  //? Destructuring our props
  const { restInfo } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = restInfo?.info;
  const { deliveryTime } = restInfo?.info.sla;
  return (
    <div className="flex flex-col h-[18rem] w-[15rem] hover:scale-95 rounded-3xl transition-all">
      <div className="rounded-3xl overflow-hidden">
        <img
          className="h-40 w-64 object-cover rounded-3xl "
          src={CDN_LINK + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="my-2">
        <h3>{name.length > 28 ? name.substring(0, 30) + "..." : name}</h3>
        <h5>
          {avgRating + "🌟"} <span>{deliveryTime + " mins"}</span>
        </h5>
        <div className="cuisines">{cuisines.slice(0, 3).join(", ")}</div>
      </div>
    </div>
  );
};

export default RestCard;
