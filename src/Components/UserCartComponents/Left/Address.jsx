import React, { useState } from "react";
import { createPortal } from "react-dom";
import AddressPortal from "../../Portal/AddressPortal";

function Address() {
  const [show, setShow] = useState(false);
  let address = JSON.parse(localStorage.getItem("address"));

  return (
    <div className="w-full text-[14px] gap-1   sm:text-sm p-2 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between border text-gray-700 border-gray-200">
      <div className="flex flex-col gap-1">
        <span>
          Deliver to :
          <span className="font-semibold">
            {Boolean(address) ? address.name + " " + address.pinCode : " "}
          </span>
        </span>
        <span>
          {Boolean(address) ? address.address1 + " " + address.address2 : ""}
        </span>
      </div>
      <button
        className="redBtn"
        onClick={() => {
          setShow(true);
        }}
      >
        {Boolean(address) ? "CHANGE ADDRESS" : "ADD ADDRESS"}
      </button>
      {show &&
        createPortal(
          <AddressPortal setShow={setShow} />,
          document.getElementById("address")
        )}
    </div>
  );
}

export default Address;
