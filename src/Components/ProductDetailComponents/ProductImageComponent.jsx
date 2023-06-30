import React from "react";
import ImageCard from "./ImageCard";

function ProductImageComponent({ imageList }) {
  return (
    <div className=" w-full md:w-[55%]  grid grid-cols-2 gap-1 sm:gap-4">
      {imageList?.map((img, index) => {
        return <ImageCard key={img} src={img} index={index} />;
      })}
    </div>
  );
}

export default ProductImageComponent;
