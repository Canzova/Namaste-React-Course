import { BiSolidOffer } from "react-icons/bi";
const Offer = (props) => {
  const { details } = props;
  // Take only the first 4 items from the details array
  const limitedDetails = details.slice(0, 4);
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center my-4">
      {limitedDetails.map((items) => {
        return (
          <button
            key={items?.info?.offerIds}
            className="rounded-lg border-slate-300 border-2 font-custom p-3 h-20 w-52"
          >
            <div className="flex items-center justify-start text-[#797C87] font-bold pb-1">
              <BiSolidOffer className="inline-block text-xl text-[#88584B]" />{" "}
              &nbsp; {items?.info?.header}
            </div>
            <div className="text-[.7rem] text-[#797C87]">
              {items?.info?.couponCode} | {items?.info?.description}
            </div>
          </button>
        );
      })}
    </div>
  );
};
export default Offer;
