import React from "react";
import { useParams } from "react-router-dom";

import ItemCard from "../Components/ProductDetailComponents/ItemCard";
import useFetchProducts from "../CustomHooks/useFetchProducts";
import { SpinnerCircularFixed } from "spinners-react";

function Products() {
  const { type } = useParams();
  const { list, loading } = useFetchProducts(type);
  return (
    <div className="w-full">
      {!loading && (
        <p className="mx-auto  sm:text-lg screenBreakPoint  p-1 sm:py-2  sm:px-4 font-semibold mt-2 pl-2 ">
          {type != "h&f" ? type.toUpperCase() : "HOME & FURNITURE"}
        </p>
      )}
      <SpinnerCircularFixed
        className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        color="black"
        thickness={200}
        enabled={loading}
      />
      {!loading && (
        <div className="w-full  screenBreakPoint mx-auto  p-1 sm:px-4 grid gap-2 sm:gap-4 md:gap-6 grid-cols-2  md:grid-cols-3  lg:grid-cols-4 ">
          {list?.map((e) => {
            return <ItemCard key={e.id} data={e} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
