import { BiSolidOffer } from "react-icons/bi";
const Offer = (props) => {
  const { details } = props;
  console.log(details);
  return (
    <div className="offer-container">
      {details.map((items) => {
        return (
          <button className="offer-btn" key={items?.info?.offerIds}>
            <div className="logo-conatiner">
              <BiSolidOffer /> &nbsp; {items?.info?.header}
            </div>
            <div>
              {items?.info?.couponCode} | {items?.info?.description}
            </div>
          </button>
        );
      })}
    </div>
  );
};
export default Offer;
