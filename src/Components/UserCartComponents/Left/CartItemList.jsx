import React from "react";
import { connect } from "react-redux";
import CartListItem from "./CartListItem";
import { RemoveSelected } from "../../../Redux/CartItem/CartItemAction";

function CartItemList({ cartItems, remove }) {
  const NumberOfCheckedItems = checked(cartItems);
  return (
    <>
      <div className="flex justify-between text-[12px] sm:text-sm my-1 sm:my-6 items-center">
        <div className="flex gap-2 items-center">
          <input
            onChange={() => {}}
            type="checkbox"
            checked={NumberOfCheckedItems == cartItems.length ? true : false}
          />
          <span className="font-semibold">
            {NumberOfCheckedItems}/{cartItems.length} ITEMS SELECTED
          </span>
        </div>
        <button
          className="redBtn "
          onClick={() => {
            remove();
          }}
        >
          REMOVE
        </button>
      </div>

      {cartItems?.map((e) => {
        return <CartListItem key={e.id + e.quantity + e.checked} data={e} />;
      })}
    </>
  );
}
function checked(listItems) {
  let count = 0;
  listItems.forEach((e) => {
    e.checked && count++;
  });
  return count;
}

function MapStateToProps(state) {
  return { cartItems: state.list };
}

function MapDispatchToProps(dispatch) {
  return {
    remove: () => {
      dispatch(RemoveSelected());
    },
  };
}

export default connect(MapStateToProps, MapDispatchToProps)(CartItemList);
