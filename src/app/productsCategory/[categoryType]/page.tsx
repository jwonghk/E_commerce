//'useClient';
import ProductTable from "@/components/CategoryProductTable";
import MockProducts from "../../../data/mockProducts";
import Image from 'next/image';
//import { useState } from "react";


type CategoryPageProps = {
    params : {
        categoryType : string
    }
};

export default function CategoryPage(props : CategoryPageProps) {
    const parameter =  props.params;  // for sake of getting rid of the Error
    // Error: Route "/productsCategory/[category]" used `params.category`. `params` should be awaited 
    // before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
    const category = parameter.categoryType;

    //const [checked, setchecked] = useState(false);
    
    const filterProducts = MockProducts.filter((product : any) => product.category.toLowerCase() === category.toLowerCase());

    return (
    <div>
        <h1 style={{textAlign : 'center'}}> <strong>Products in Category: {category} </strong>
        </h1>
        {filterProducts.length === 0 ? (<p> No products found in this category</p>) : 
        (
            <div className="products-table">
                <h1 style= {{textAlign : 'center' , fontSize: "5rem"}} className="page-title"> Table of {category} </h1>
                <table className="category-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price </th>
                            <th>Descriptions</th>
                            <th>Photo</th>
                            <th>Add To Cart</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <ProductTable category={category} />
                    </tbody>
                </table>
            </div>
            /*
            <ul>
                {filterProducts.map((product) => (
                    <li key={product.id}>
                        <h2> {product.name} </h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <Image 
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={150}
                        />
                    </li>
                ))}
            </ul>*/
        )
        }
    </div>
    )};
