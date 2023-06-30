import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductImageComponent from "../Components/ProductDetailComponents/ProductImageComponent";
import ProductDetailComponent from "../Components/ProductDetailComponents/ProductDetailComponent";
import SimilarProducts from "../Components/ProductDetailComponents/SimilarProducts";

function ProductDetailPage() {
  const location = useLocation();
  const productDetail = location.state;

  return (
    <div className=" w-full screenBreakPoint  mx-auto  p-2 sm:p-8  ">
      <div className="  flex flex-col gap-2 sm:gap-6   md:flex-row border-b-4 border-gray-200 pb-4  ">
        <ProductImageComponent imageList={productDetail.images} />
        <ProductDetailComponent productDetail={productDetail} />
      </div>
      <SimilarProducts category={productDetail.category} />
    </div>
  );
}

export default ProductDetailPage;
