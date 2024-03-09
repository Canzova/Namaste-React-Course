import { useSelector } from "react-redux";
import { CDN_LINK } from "../utils/constants";
const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  // console.log(data);

  if (data?.length === 0) {
    return (
      <div>
        <h1>Cart is empty</h1>
      </div>
    );
  }

  const totalPrice = data.reduce(function (acc, curr) {
    acc =
      acc +
      (curr?.card?.info.price
        ? curr?.card?.info.price / 100
        : curr?.card?.info.defaultPrice / 100);
    return acc;
  }, 0);

  return (
    <div className="flex justify-between items-top mx-28 my-10 gap-8">
      <div className="shadow-xl w-[80%] p-4 bg-slate-50">
        <div>
          {/* Product details */}
          <h1 className="text-2xl font-bold border-b border-dashed pb-3 border-black">
            Your Meals
          </h1>
          {data.map((item) => {
            return (
              <div
                key={item?.card?.info.id}
                className="flex justify-start items-center my-4 pb-7 border-b border-dashed border-black"
              >
                <div className="h-28 w-40 mr-6">
                  {/* Image */}
                  <img
                    src={CDN_LINK + item?.card?.info.imageId}
                    alt="Meal Image"
                    className=" h-[100%] w-[100%] rounded-lg  object-cover"
                  />
                </div>
                <div className="w-4/5">
                  {/* Content */}
                  <h1 className="text-lg font-custom font-medium">
                    {item?.card?.info.name}
                  </h1>
                  <h2 className="text-[#A0A2AB]">
                    ₹
                    {item?.card?.info.price
                      ? item?.card?.info.price / 100
                      : item?.card?.info.defaultPrice / 100}
                  </h2>
                  <p className="text-[#A0A2AB] text-sm">
                    {item?.card?.info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-80 w-80 shadow-xl p-4 bg-slate-50">
        {/* Total Price */}
        <h1 className="text-xl font-bold border-b border-dashed pb-3 text-center border-black">
          Total Price : {totalPrice}
        </h1>
      </div>
    </div>
  );
};
export default Cart;
