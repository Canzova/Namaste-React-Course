
import Header from "./Header";
import React from "react";
import MainContainer from "./MainContainer";
import SecondaeyContainer from "./SecondaryContainer";

const Browse = () => {
  return (
    <div className="overflow-x-hidden after:absolute after:inset-0 after:bg-black after:opacity-60">
      <Header />
      <MainContainer />
      <SecondaeyContainer />
    </div>
  );
};

export default Browse;
