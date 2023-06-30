import React from "react";

import { useState } from "react";
import OfferIcon from "../../../Assets/OfferIcon";
import DownIcon from "../../../Assets/DownIcon";
import UpIcon from "../../../Assets/UpIcon";

function Offer() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full  p-1 sm:px-2 text-[13px] sm:text-sm  sm:py-3 flex flex-col gap-3  border text-gray-700 border-gray-200">
      <div className="flex  items-center">
        <OfferIcon /> <b>Available Offers</b>
      </div>
      <ul
        className={`pl-4 ${!show && "not-first:hidden"} `}
        style={{ listStyleType: "circle" }}
      >
        <li>
          10% Instant Discount in ICICI Bank Credit Cards Up to Rs 1,000 on a
          min spend of Rs 4,000.TCA
        </li>
        <li>
          10% Instant Discount in ICICI Bank Debit Cards Up to Rs 1,000 on a min
          spend of Rs 4,000.TCA
        </li>
        <li>
          Get up to Rs 500 Cashback on CRED pay UPI (Android Devices only) on a
          Minimum spend of Rs 1,000.TCA
        </li>
        <li>5% Unlimited Cashback on FlipKart Axis Bank Credit Card.TCA</li>
        <li>10% Cashback upto Rs 150 on Freecharge Paylater transaction.TCA</li>
      </ul>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="gap-1 pl-4 flex items-center font-semibold"
      >
        <span>{show ? "Show Less" : "Show More"}</span>
        {show ? <UpIcon /> : <DownIcon />}
      </button>
    </div>
  );
}

export default Offer;
