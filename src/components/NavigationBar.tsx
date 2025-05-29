import React from "react";
//import '../app/globals.css';
import Link from 'next/link';

const NavigBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li> <Link href="/about">  About </Link> </li>
                <li> <Link href="/productsDetails"> Products Details</Link> </li>
                <li> <Link href="/productsCategory"> Products Categories</Link></li>
                <li> <Link href="/search"> Search </Link></li>
                <li> <Link href="/shoppingCart"> Shopping Cart</Link></li>
            </ul>
        </nav>
    );
};

export default NavigBar;