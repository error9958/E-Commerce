import React, { useState } from "react";
import CrossIcon from "../../Assets/CrossIcon";

function AddressPortal({ setShow }) {
  const [error, setError] = useState(false);
  return (
    <div
      onClick={() => {
        setShow(false);
      }}
      className="bg-black/75 flex  text-xs font-bold absolute top-0 w-full h-full z-[100] justify-center items-center "
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let name, phoneNo, pinCode, address1, address2;
          name = e.target[0].value;
          phoneNo = e.target[1].value;
          pinCode = e.target[2].value;
          address1 = e.target[3].value;
          address2 = e.target[4].value;
          if (!(name && phoneNo && pinCode && address1 && address2)) {
            setError(true);
          } else {
            const Address = {
              name,
              phoneNo,
              pinCode,
              address1,
              address2,
            };

            localStorage.setItem("address", JSON.stringify(Address));
            setShow(false);
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="  bg-white flex w-full md:w-[500px]   flex-col "
      >
        <div className=" flex text-sm px-6 py-3  justify-between items-center">
          <span>ADD NEW ADDRESS</span>
          <div
            onClick={() => {
              setShow(false);
            }}
          >
            <CrossIcon />
          </div>
        </div>
        {error && (
          <div className="text-white bg-red-400 px-6 py-3">
            Please fill out all required fields *
          </div>
        )}
        <div className="px-6 border-t-2 border-gray-300 py-6 flex flex-col gap-6 ">
          <div className="flex gap-2 flex-col">
            <span>CONTACT DETAILS</span>
            <input type="text" placeholder="Name*" className="input" />
            <input type="tel" placeholder="Mobile No*" className="input" />
          </div>

          <div className="flex gap-2 flex-col">
            <span>ADDRESS</span>
            <input placeholder="Pin Code*" type="number" className="input" />
            <input
              placeholder="Address(House No,Building,Street,Area)*"
              className="input"
            />
            <input placeholder="Locality / Town *" className="input" />
          </div>
        </div>

        <button className="py-3 text-base bg-red-400 text-white ">
          ADD ADDRESS
        </button>
      </form>
    </div>
  );
}

export default AddressPortal;
