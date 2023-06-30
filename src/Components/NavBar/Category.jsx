import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  return (
    <div className="w-full border-b p-1 bg-white">
      <div className="screenBreakPoint  flex mx-auto items-center overflow-x-auto gap-2 justify-between">
        <div className="flex group flex-col items-center">
          <button
            className={`btn  ${
              option == "electronics" ? "text-blue-500" : "text-black"
            } `}
            onClick={() => {
              setOption("electronics");
              navigate("/product/electronics");
            }}
          >
            ELECTRONICS
          </button>
          <div className="hr  group-hover:w-full " />
        </div>
        <div className="flex group flex-col items-center">
          <button
            className={`btn  ${
              option == "clothes" ? "text-blue-500" : "text-black"
            } `}
            onClick={() => {
              setOption("clothes");
              navigate("/product/clothes");
            }}
          >
            CLOTHES
          </button>
          <div className="hr  group-hover:w-full" />
        </div>
        <div className="flex group flex-col items-center">
          <button
            className={`btn  ${
              option == "accessories" ? "text-blue-500" : "text-black"
            } `}
            onClick={() => {
              setOption("accessories");
              navigate("/product/accessories");
            }}
          >
            ACCESSORIES
          </button>
          <div className="hr  group-hover:w-full" />
        </div>
        <div className="flex group flex-col items-center">
          <button
            className={`btn  ${
              option == "h&f" ? "text-blue-500" : "text-black"
            } `}
            onClick={() => {
              setOption("h&f");
              navigate("/product/h&f");
            }}
          >
            HOME & FURNITURE
          </button>
          <div className="hr  group-hover:w-full" />
        </div>
        <div className="flex group flex-col items-center">
          <button
            className={`btn  ${
              option == "shoes" ? "text-blue-500" : "text-black"
            } `}
            onClick={() => {
              setOption("shoes");
              navigate("/product/shoes");
            }}
          >
            SHOES
          </button>
          <div className="hr  group-hover:w-full" />
        </div>
        <div className="flex group flex-col items-center">
          <button
            className={`btn  ${
              option == "others" ? "text-blue-500" : "text-black"
            } `}
            onClick={() => {
              setOption("others");
              navigate("/product/others");
            }}
          >
            OTHERS
          </button>
          <div className="hr  group-hover:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Category;
