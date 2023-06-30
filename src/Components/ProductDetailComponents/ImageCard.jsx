import React from "react";

function ImageCard({ src, index }) {
  return (
    <img
      className="drop-shadow-md hover:drop-shadow-lg h-[160px] sm:h-[250px] w-full object-cover "
      src={src}
      alt={`This is Image ${index + 1}`}
    />
  );
}

export default ImageCard;
