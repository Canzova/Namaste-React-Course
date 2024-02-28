import { CDN_LINK } from "../utils/constants";

const RestCard = (props) => {
  //? Destructuring our props
  const { restInfo } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = restInfo?.info;
  const { deliveryTime } = restInfo?.info.sla;
  return (
    <div className="rest-card">
      <div className="rest-img-container">
        <img className="rest-img" src={CDN_LINK + cloudinaryImageId} alt="" />
      </div>
      <div className="rest-content">
        <h3>{name}</h3>
        <h5>
          {avgRating + "🌟"} <span>{deliveryTime + " mins"}</span>
        </h5>
        <div className="cuisines">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

export default RestCard;
