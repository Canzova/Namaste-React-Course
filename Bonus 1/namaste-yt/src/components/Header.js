import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiMicrophone } from "react-icons/ti";
import { MdOutlineVideoCall } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <div className=" rounded-3xl p-3 hover:bg-gray-200 cursor-pointer">
          <RxHamburgerMenu className="text-2xl" />
        </div>

        <div className="flex items-center gap-2 font-bold text-2xl">
          <FaYoutube className="text-red-700 text-3xl" />
          YouTube
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className={`flex items-center border-2 border-slate-300 rounded-3xl  w-[35rem] h-[3rem] shadow-inner ${show && "w-[40rem]"}`}>
          <div
            className={`flex justify-between items-center w-[100%] h-[100%] rounded-l-3xl ${
              show && "border-2 border-blue-400"
            }`}
          >
             <CiSearch className={`text-2xl mx-2 ${show ? "visible" : "hidden"}`} />
            <input
              className="w-[100%] outline-none rounded-l-3xl h-[100%] pl-4 text-[1.2rem] py-2"
              placeholder="Search"
              onClick={() => {
                setShow(true);
              }}
            />
          </div>
          <div className=" h-[100%] flex justify-center items-center bg-gray-200 rounded-r-3xl px-4">
            <CiSearch className="text-2xl " />
          </div>
        </div>
        <div className=" rounded-3xl p-3 bg-gray-200 cursor-pointer">
          <TiMicrophone className="scale-[1.3]" />
        </div>
      </div>

      <div className="flex  items-center gap-4">
        <div className=" rounded-3xl p-3  hover:bg-gray-200 cursor-pointer">
          <MdOutlineVideoCall className="scale-[2]" />
        </div>
        <div className=" rounded-3xl p-3 hover:bg-gray-200 cursor-pointer">
          <BsBell className="scale-[1.3]" />
        </div>
        <div className=" rounded-3xl p-3 hover:bg-gray-200 cursor-pointer">
          <FaUser className="scale-[1.3]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
