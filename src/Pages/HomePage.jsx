import { SpinnerCircularFixed } from "spinners-react";
import ItemCard from "../Components/ProductDetailComponents/ItemCard";
import useFetchTop30 from "../CustomHooks/useFetchTop30";

function HomePage() {
  const { list, loading } = useFetchTop30();
  return (
    <div className="w-full">
      {!loading && (
        <p className="mx-auto sm:text-lg screenBreakPoint p-1 sm:py-2  sm:px-4 font-semibold mt-2 border-l-2 border-green-500 bg-green-200 ">
          TOP RATED PRODUCTS :
        </p>
      )}

      <SpinnerCircularFixed
        className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        color="black"
        thickness={200}
        enabled={loading}
      />
      <div className="w-full  screenBreakPoint mx-auto  p-1 sm:px-4 grid gap-2 sm:gap-4 md:gap-6 grid-cols-2  md:grid-cols-3  lg:grid-cols-4 ">
        {list?.map((e) => {
          return <ItemCard key={e.id} data={e} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
