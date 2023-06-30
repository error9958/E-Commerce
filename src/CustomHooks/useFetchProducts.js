import { useEffect, useState } from "react";
import {
  fetchAccessoriesData,
  fetchClothesData,
  fetchElectronicData,
  fetchHandFData,
  fetchOthersData,
  fetchShoesData,
} from "./ItemFetchingMethods";

function useFetchProducts(type) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchMethod;
    setLoading(true);
    switch (type) {
      case "electronics":
        fetchMethod = fetchElectronicData;
        break;
      case "clothes":
        fetchMethod = fetchClothesData;
        break;
      case "accessories":
        fetchMethod = fetchAccessoriesData;
        break;
      case "h&f":
        fetchMethod = fetchHandFData;
        break;
      case "shoes":
        fetchMethod = fetchShoesData;
        break;
      case "others":
        fetchMethod = fetchOthersData;
        break;
    }
    fetchMethod().then((e) => {
      setList(e);
      setLoading(false);
    });
  }, [type]);

  return { list, loading };
}

export default useFetchProducts;
