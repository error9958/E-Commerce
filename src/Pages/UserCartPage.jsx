import React from "react";
import CartItems from "../Components/UserCartComponents/Left/Left";
import Bill from "../Components/UserCartComponents/Right/Right";

function UserCartPage() {
  return (
    <>
      <div className="sm:flex mx-auto px-2 sm:p-5 gap-3 screenBreakPoint ">
        <CartItems />
        <Bill />
      </div>
    </>
  );
}

export default UserCartPage;
