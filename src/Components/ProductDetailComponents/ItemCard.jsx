import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "../../Assets/StarIcon";

function ItemCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/detail`, { state: data });
      }}
      className="w-full flex justify-center  flex-col gap-1  bg-slate-100 text-sm card"
    >
      <img
        className=" h-[130px] sm:h-[200px] w-full object-cover "
        src={data.images[0]}
        alt={data.category}
      />

      <span
        className="text-sm  sm:text-base
       sm:font-medium text-gray-600"
      >
        {data.title}
      </span>

      <span className="text-xs sm:text-sm text-gray-400">{data.brand}</span>
      <div className=" border-gray-500 flex items-center gap-1">
        <StarIcon small />
        <span>{data.rating}</span>
      </div>
      <div className="flex gap-1 ">
        <span className="font-bold ">${data.price}</span>
        <s>
          <span className="text-red-600">
            MRP ${GetMarketPrice(data.discountPercentage, data.price)}
          </span>
        </s>
      </div>
    </div>
  );
}
const GetMarketPrice = (d, sp) => {
  return Math.ceil((sp * 100) / (100 - d));
};

export default ItemCard;
