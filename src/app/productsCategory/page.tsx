import React from "react";
import "../globals.css";
import Link from "next/link";


const LinksCategories = {
    laptops : "/productsCategory/laptops",
    cars: "/productsCategory/cars",
    restaurants: "/productsCategory/restaurants",
    cellphones: "/productsCategory/cellphones",
    watchesjewels: "/productsCategory/watchesjewels",  
    furnitures: "/productsCategory/furnitures",
    tv: "/productsCategory/tv"
};

function ProductsCate() {

    const categories = [
        {type: "laptops", update: "2025-04-20", count:24, link: LinksCategories.laptops},
        {type: "cars", update: "2025-03-11", count:15, link: LinksCategories.cars},
        {type: "restaurants", update: "2025-01-05", count:3, link: LinksCategories.restaurants},
        {type: "cellphones", update: "2025-04-20", count:24, link: LinksCategories.cellphones},
        {type: "watches/jewelleries", update: "2025-03-11", count:15, link: LinksCategories.watchesjewels},
        {type: "furnitures", update: "2024-11-05", count:3, link: LinksCategories.furnitures},
        {type: "TV", update: "2025-02-05", count:3, link: LinksCategories.tv},
    ];

    return (
        <div className="product-category-container"> 
            <h1 className="page-title"> Product Category</h1>
            <table className="category-table">
                <thead>
                    <tr>
                    <th> Product Type</th>
                    <th> Last Updated</th>
                    <th> Number of Items</th>
                    <th> Link to Details </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat,idx) => (
                        <tr key={idx}>
                            <td> {cat.type} </td>
                            <td> {cat.update} </td>
                            <td> {cat.count} </td>
                            <td> 
                                <Link href={cat.link}>
                                    <span style = {{color : 'blue', textDecoration: 'underline', cursor: 'pointer'}}>
                                        View
                                    </span>
                                </Link>
                            </td>
                        </tr>
                ))} 
                </tbody>
            </table>
        </div>
    ) 
};

export default ProductsCate;