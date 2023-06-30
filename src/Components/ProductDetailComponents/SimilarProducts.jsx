import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function SimilarProducts({ category }) {
  console.log(category);
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchRequest = `https://dummyjson.com/products/category/${category}`;
    fetch(fetchRequest)
      .then((res) => res.json())
      .then((e) => {
        setList(e.products);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className=" flex flex-col">
      <span className="my-2 sm:my-6 text-base sm:text-xl font-semibold border-l-4 rounded-sm text-violet-500 border-violet-500 p-2 sm:p-4 w-full bg-violet-300">
        Similar Products
      </span>
      <div className="grid gap-1 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list?.map((e) => {
          return <ItemCard key={e.id} data={e} />;
        })}
      </div>
    </div>
  );
}

export default SimilarProducts;
