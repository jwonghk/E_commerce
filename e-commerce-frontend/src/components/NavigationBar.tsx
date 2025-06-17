// src/components/NavigationBar.tsx
import { Link } from "react-router-dom";
import "../globals.css"; // Import your global styles

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/About">About</Link>
      <Link to="/productsDetails">Products Details</Link>
      <Link to="/productCategories">Products Categories</Link>
      <Link to="/search">Search</Link>
      <Link to="/shoppingCart">Shopping Cart</Link>
    </nav>
  );
};

export default NavigationBar;
