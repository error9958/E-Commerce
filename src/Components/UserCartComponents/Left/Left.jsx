import React from "react";
import Address from "./Address";
import Offer from "./Offer";
import CartItemList from "./CartItemList";

function CartItems() {
  return (
    <div className="w-full md:w-[60%] pt-2 sm:pt-6 gap-2 flex flex-col ">
      <Address />
      <Offer />
      <CartItemList />
    </div>
  );
}

export default CartItems;
