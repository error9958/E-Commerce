import React from "react";
import ReturnIcon from "../../../Assets/ReturnIcon";
import CrossIcon from "../../../Assets/CrossIcon";
import Plus_MinusIcon from "../../../Assets/Plus_MinusIcon";
import {
  DecrementQuantity,
  IncrementQuantity,
  RemoveItem,
  ToggleCheck,
} from "../../../Redux/CartItem/CartItemAction";
import { connect } from "react-redux";
function CartListItem({ data, increment, decrement, removeItem, toggleCheck }) {
  return (
    <div className="text-[12px] sm:text-sm border border-gray-200 flex items-center  relative p-2 gap-2">
      <input
        type="checkbox"
        className="absolute top-0 m-2 left-0"
        checked={data.checked}
        onChange={() => {
          toggleCheck(data.id);
        }}
      />
      <button
        onClick={() => {
          removeItem(data.id);
        }}
        className="p-2 absolute top-0 right-0"
      >
        <CrossIcon />
      </button>
      <img
        className="w-[80px] h-[100px] object-cover "
        src={data.images[0]}
        alt={data.brand}
      />
      <div className="w-[70%] flex flex-col gap-1">
        <b>{data.title}</b>
        <span className="font-semibold">{data.description}</span>
        <div className="flex gap-1 items-center ">
          <div className="flex gap-1">
            <span>Qty : </span>
            <button
              onClick={() => {
                data.quantity && decrement(data.id);
              }}
            >
              <Plus_MinusIcon />
            </button>

            <span>{data.quantity}</span>

            <button
              onClick={() => {
                data.quantity < 8 && increment(data.id);
              }}
            >
              <Plus_MinusIcon plus />
            </button>
          </div>
          <span className="text-[10px] px-1 py-[2px] text-red-400 border border-red-400">
            {data.stock} left
          </span>
        </div>
        <div className="flex  gap-1  sm:text-sm">
          <span className="font-bold ">${data.price}</span>
          <s>
            <span className="text-red-600">
              MRP ${GetMarketPrice(data.discountPercentage, data.price)}
            </span>
          </s>
          <span className="text-green-500">
            ({data.discountPercentage}% OFF)
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <ReturnIcon />
          <b>7 days </b>
          <span>return is available</span>
        </div>
      </div>
    </div>
  );
}
const GetMarketPrice = (d, sp) => {
  return Math.ceil((sp * 100) / (100 - d));
};

function MapDispatchToProps(dispatch) {
  return {
    increment: (id) => dispatch(IncrementQuantity(id)),

    decrement: (id) => dispatch(DecrementQuantity(id)),

    removeItem: (id) => dispatch(RemoveItem(id)),

    toggleCheck: (id) => dispatch(ToggleCheck(id)),
  };
}

export default connect(null, MapDispatchToProps)(CartListItem);
