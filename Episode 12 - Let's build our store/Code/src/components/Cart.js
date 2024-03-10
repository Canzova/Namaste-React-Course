import { useSelector, useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import TotalPrice from "./TotalPrice";
import { clearItems } from "../utils/cartSlice";
import toast from "react-hot-toast";
const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  // console.log(data);
  const dispatch = useDispatch();

  if (data?.length === 0) {
    return (
      <div>
        <h1>Cart is empty</h1>
      </div>
    );
  }

  const handleClearCart = () => {
    dispatch(clearItems());
    toast.error("Cleared Cart", {
      style: {
        backgroundColor: "#363636",
        border: "1px solid red",
        padding: "16px",
        color: "white",
      },
      iconTheme: {
        primary: "red",
        secondary: "white",
      },
    });
  };

  return (
    <div className="flex justify-between items-top mx-28 my-10 gap-8">
      <div className="shadow-xl w-[80%] p-4 bg-slate-50">
        <div>
          {/* Product details */}
          <div className="flex justify-between items-center  border-b border-dashed pb-3 border-black">
            <h1 className="text-2xl font-bold">Your Meals</h1>
            <button
              className=" text-sm border-2 border-slate-300 rounded-lg px-2 py-1 hover:border-[#fc8019]"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          {data.map((item, index) => {
            //console.log({...item?.card, quantity :  index});
            return (
              <div
                key={item?.info.id}
                className="flex justify-start items-center my-4 pb-7 border-b border-dashed border-black"
              >
                <div className="h-28 w-40 mr-6">
                  {/* Image */}
                  <img
                    src={CDN_LINK + item?.info.imageId}
                    alt="Meal Image"
                    className=" h-[100%] w-[100%] rounded-lg  object-cover"
                  />
                </div>
                <div className="w-4/5">
                  {/* Content */}
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-custom font-medium">
                      {item?.info.name}
                    </h1>
                    <h1 className="text-lg font-custom font-medium">
                      Quantity : {item?.quantity}
                    </h1>
                  </div>
                  <h2 className="text-[#A0A2AB]">
                    ₹
                    {item?.info.price
                      ? item?.info.price / 100
                      : item?.info.defaultPrice / 100}
                  </h2>
                  <p className="text-[#A0A2AB] text-sm">
                    {item?.info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TotalPrice />
    </div>
  );
};
export default Cart;
