import React from "react";
import ShoppingBagIcon from "../../Assets/ShoppingBagIcon";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Category from "./Category";

function NavBar({ cartItems }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-blue-500 text-white sticky top-0  z-10 ">
        <div className=" p-2 screenBreakPoint mx-auto sm:px-4 flex items-center sm:py-2    text-xl sm:text-5xl font-semibold  justify-between ">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            GO CART
          </button>
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className={`flex  items-center relative  `}
          >
            <ShoppingBagIcon />
            <div
              className={`badge   ${
                cartItems.length === 0 ? "hidden" : "flex"
              }`}
            >
              <span>{cartItems.length}</span>{" "}
            </div>
          </div>
        </div>
        <Category />
      </div>
    </>
  );
}
function MapStateToProps(state) {
  return { cartItems: state.list };
}

export default connect(MapStateToProps)(NavBar);
