import React from "react";
import Coupon from "./Coupon";
import PriceContainer from "./PriceContainer";

function Bill() {
  return (
    <div className="w-full md:w-[40%] border-l border-gray-200 px-4 py-5 flex flex-col ">
      <Coupon />
      <PriceContainer />
    </div>
  );
}

export default Bill;
