import { CDN_LINK } from "../utils/constants";
import white from "../../images/white.jpg";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

//! Our Icons
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { addItems } from "../utils/cartSlice";

const Dishesh = ({ details, showItems, setShowIndex, setHideIndex }) => {
  const { title } = details;

  const handleAddAll = (items, quantity) => {
    handleAdd(items, quantity);
    //handleAdd2(items);
  };

  const dispatch = useDispatch();
  const data = useSelector((store) => store.cart.items);
  const handleAdd = (item, quantity) => {
    //Dispatch
    //console.log(data);
    dispatch(addItems({ ...item?.card, quantity: quantity }));
    toast.success("Added to Cart");
  };


  const handleImageError = (event) => {
    event.target.src = white;
  };
  return (
    <>
      <div className="shadow-inner">
        <div
          className="text-[#3E4152] text-lg font-bold font-title flex justify-between items-center py-8 cursor-pointer"
          onClick={() => {
            showItems ? setHideIndex() : setShowIndex();
          }}
        >
          <h1 className="font-bold text-[#3E4152]">
            {title} ({details?.itemCards?.length})
          </h1>
          {showItems ? (
            <IoIosArrowUp className="text-2xl cursor-pointer" />
          ) : (
            <IoIosArrowDown className="text-2xl cursor-pointer" />
          )}
        </div>

        {showItems && (
          <div className="dishesh-cards border-2 rounded-lg p-12 py-0 mb-8">
            {details?.itemCards?.map((item) => {
              return (
                <div
                  className="flex justify-between items-center my-8  border-b-2 border-b-slate-300 pb-6"
                  key={item?.card?.info?.id}
                >
                  <div>
                    <h2 className="font-bold text-[#3E4152]">
                      {item?.card?.info?.name}
                    </h2>
                    <p className="text-[#3E4152]">
                      ₹{" "}
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                    </p>
                    <div className="w-[43rem] text-[#A0A2AB] mt-4 text-sm">
                      <p>{item?.card?.info?.description}</p>
                    </div>
                  </div>
                  <div className="h-28 w-32 relative">
                    <img
                      className=" rounded-xl h-[100%] w-[100%] object-cover"
                      src={CDN_LINK + item?.card?.info?.imageId}
                      alt=""
                      onError={handleImageError}
                    />
                    <button
                      className="absolute text-base bg-white shadow-inner text-green-800  border-2 border-slate-300 w-24 px-4  py-1 rounded-md font-bold bottom-[.9rem] left-[1rem]  hover:brightness-110 transition-all duration-300
                      "
                      onClick={() => handleAddAll(item, 1)}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Dishesh;
