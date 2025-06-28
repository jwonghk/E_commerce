// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ProductCateg from "./pages/prodCategory";
import IndividualProductsDetails from "./pages/productDetails";
import Search from "./pages/search";
import ShoppingCart from "./pages/shoppingCart";
import Category from "./pages/CategoryPage";
import CheckOut from "./pages/checkOutPage";

// Import other pages as needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/productCategories" element={<ProductCateg />} />
      <Route path="/productsDetails" element={<IndividualProductsDetails />} />
      <Route path="/search" element={<Search/>} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
      <Route path="/productsCategory/:categoryType" element={<Category />} />
      <Route path="/checkingOutPage" element={<CheckOut />} />

      {/* Add other routes below */}
    </Routes>
  );
}

export default App;
