import React from "react";
import TagIcon from "../../../Assets/TagIcon";

function Coupon() {
  return (
    <div className="py-3 flex text-sm flex-col gap-2">
      <span className="font-semibold">COUPONS</span>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <TagIcon />
          <b>Apply Coupons</b>
        </div>
        <button className="redBtn">APPLY</button>
      </div>
    </div>
  );
}

export default Coupon;
