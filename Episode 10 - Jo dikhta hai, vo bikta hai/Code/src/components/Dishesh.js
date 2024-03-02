import { CDN_LINK } from "../utils/constants";
import { useState } from "react";
import white from "../../images/white.jpg";

//! Our Icons
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Dishesh = ({ details }) => {
  const { title } = details;
  const [show, setShow] = useState(true);

  const handleImageError = (event) => {
    event.target.src = white;
  };
  return (
    <>
      {details?.itemCards?.length && (
        <div className="dishesh-container">
          <div
            className="dishesh-header"
            onClick={() => {
              setShow(!show);
            }}
          >
            <h1 className="dish-List-Title">
              {title} ({details?.itemCards?.length})
            </h1>
            {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {show && (
            <div className="dishesh-cards">
              {details?.itemCards?.map((item) => {
                return (
                  <div className="dishesh-card" key={item?.card?.info?.id}>
                    <div className="dishesh-details">
                      <h2>{item?.card?.info?.name}</h2>
                      <p style={{ color: "#282c3f" }}>
                        ₹ {item?.card?.info?.price / 100}
                      </p>
                      <div className="dish-discription">
                        <p>{item?.card?.info?.description}</p>
                      </div>
                    </div>
                    <div className="dishesh-img">
                      <img
                        src={CDN_LINK + item?.card?.info?.imageId}
                        alt=""
                        onError={handleImageError}
                      />
                      <button
                        className="order-Button
                      "
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
      )}
    </>
  );
};
export default Dishesh;
