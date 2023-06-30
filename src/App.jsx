import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import UserCartPage from "./Pages/UserCartPage";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<ProductDetailPage />} />
          <Route path="/product/:type" element={<Products />} />
          <Route path="/cart" element={<UserCartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
