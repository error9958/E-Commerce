import React from "react";
import { connect } from "react-redux";

function PriceContainer({ listItems }) {
  const price = findTotalPrice(listItems);
  const discount = findTotalDiscount(listItems);
  return (
    <>
      <div className="text-sm flex flex-col gap-2 border-b py-2 border-gray-200">
        <span className="font-semibold py-2 ">
          PRICE DETAILS ({listItems.length} Item)
        </span>
        <div className="flex justify-between">
          <span>Total MRP</span>
          <span>${price}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount on MRP</span>
          <span className="text-red-400">-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span className="text-green-500">Apply Coupon</span>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <b>Total Amount</b>
        <b>${price - discount}</b>
      </div>
      <button className="w-full rounded-sm py-2 bg-rose-600 ">
        <b className="text-white">PLACE ORDER</b>
      </button>
    </>
  );
}

function MapStateToProps(state) {
  return { listItems: state.list };
}

function findTotalPrice(listItems) {
  let total = 0;
  listItems.forEach(
    (item) =>
      (total +=
        GetMarketPrice(item.discountPercentage, item.price) * item.quantity)
  );
  return total;
}
function findTotalDiscount(listItems) {
  let total = 0;
  listItems.forEach((item) => {
    let mp = GetMarketPrice(item.discountPercentage, item.price);
    total += mp * (item.discountPercentage / 100) * item.quantity;
  });

  return Math.ceil(total);
}
const GetMarketPrice = (d, sp) => {
  return Math.ceil((sp * 100) / (100 - d));
};

export default connect(MapStateToProps, null)(PriceContainer);
