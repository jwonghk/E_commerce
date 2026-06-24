// src/components/NavigationBar.tsx
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../store/userSlice';
import type { RootState } from '../store/store';
import "../globals.css"; // Import your global styles

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/About">About</Link>
      <Link to="/productsDetails">Products Details</Link>
      <Link to="/productCategories">Products Categories</Link>
      <Link to="/search">Search</Link>
      <Link to="/shoppingCart">Shopping Cart</Link>
      <Link to="/admin"> Admin </Link>
      <Link to="/addingProductByAdmin"> (Admin Only) Adding Product</Link>
      <Link to="/register"> Register </Link>
    </nav>
  );
};

export default NavigationBar;
