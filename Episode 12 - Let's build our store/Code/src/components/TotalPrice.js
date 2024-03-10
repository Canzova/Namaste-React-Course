// Icons
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { increaseItems, decreaseItems, clearItems } from "../utils/cartSlice";
import toast from "react-hot-toast";
const TotalPrice = () => {
  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const Price = data.reduce(function (acc, curr) {
    const quant = curr.quantity;
    acc =
      acc +
      quant *
        (curr?.info.price
          ? curr?.info.price / 100
          : curr?.info.defaultPrice / 100);
    return acc;
  }, 0);

  const handleAdd = (item) => {
    dispatch(increaseItems(item));
    toast.success("Item added successfully", {
      style: {
        backgroundColor: "#363636",
        border: "1px solid #fc8019",
        padding: "16px",
        color: "white",
      },
      iconTheme: {
        primary: "#fc8019",
        secondary: "white",
      },
    });
  };

  const handleRemove = (item) => {
    dispatch(decreaseItems(item));
    toast.error("Item removed successfully", {
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
    <div className="h-80 w-80 shadow-xl p-4 bg-slate-50">
      <h1 className="text-xl font-bold border-b border-dashed pb-3 text-center border-black">
        Total Price : {Price}
      </h1>

      {data.map((item) => {
        return (
          <div
            className="flex justify-between items-center my-6"
            key={item?.info?.id}
          >
            <span className="text-sm">{item?.info?.name}</span>
            <div className="flex justify-between items-center border-2 border-slate-300">
              <button
                className="px-2 py-1 text-green-800"
                onClick={() => {
                  handleAdd(item);
                }}
              >
                <MdAdd />
              </button>
              <span className="text-sm">{item?.quantity}</span>
              <button
                className="px-2 py-1 text-[red]"
                onClick={() => {
                  handleRemove(item);
                }}
              >
                <IoMdRemove />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TotalPrice;
