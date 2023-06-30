import { useEffect, useState } from "react";
import Products from "../Pages/Products";
function useFetchTop30() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((e) => {
        const TopRatedProducts = sortList(e.products);
        setList(TopRatedProducts);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return { list, loading };
}

function sortList(listItems) {
  const sortedList = [
    ...listItems.sort((item1, item2) => item2.rating - item1.rating),
  ];
  return sortedList.splice(0, 30);
}

export default useFetchTop30;
