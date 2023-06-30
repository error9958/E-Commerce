import React from "react";
import ShoppingBagIcon from "../../Assets/ShoppingBagIcon";
import StarIcon from "../../Assets/StarIcon";
import { BuyedNewItem } from "../../Redux/CartItem/CartItemAction";
import { connect } from "react-redux";

function ProductDetailComponent({ productDetail, cartItems, addItem }) {
  return (
    <div className="w-full gap-2 text-sm sm:text-base   md:w-[45%]  flex flex-col">
      <div className=" flex gap-2  items-center border-red-400 ">
        <span className=" text-base sm:text-xl">{productDetail.title}</span>
        <div className="pl-2  border-l-2 border-gray-500 flex items-center gap-1">
          <StarIcon />
          <span>{productDetail.rating}</span>
        </div>
      </div>
      <span className="text-sm sm:text-base text-gray-500">
        {productDetail.description}
      </span>
      <hr />
      <div className="flex items-center gap-4">
        <span className="font-bold sm:text-lg">${productDetail.price}</span>
        <s>
          <span className="text-red-600">
            MRP $
            {GetMarketPrice(
              productDetail.discountPercentage,
              productDetail.price
            )}
          </span>
        </s>
        <span className="text-green-500">
          ({productDetail.discountPercentage}% OFF)
        </span>
      </div>
      <span className="  text-green-500 font-semibold">
        Inclusive of all taxes
      </span>

      <span className="  text-red-400 font-bold  ">
        Hurry ! Only {productDetail.stock} Left<sup>*</sup>
      </span>
      <hr />
      <button
        onClick={() => {
          const index = cartItems.findIndex((obj) => {
            return productDetail.id === obj.id;
          });
          if (index === -1) {
            addItem({ ...productDetail, quantity: 1, checked: true });
          }
        }}
        className="w-full bg-pink-500 rounded-sm text-white  gap-1 py-1 sm:gap-4 sm:py-4 justify-center items-center font-bold flex  "
      >
        <ShoppingBagIcon />
        <span>ADD TO CART</span>
      </button>
    </div>
  );
}

const GetMarketPrice = (d, sp) => {
  return Math.ceil((sp * 100) / (100 - d));
};

function MapStateToProps(state) {
  return { cartItems: state.list };
}

function MapDispatchToProps(dispatch) {
  return {
    addItem: (data) => {
      return dispatch(BuyedNewItem(data));
    },
  };
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(ProductDetailComponent);
