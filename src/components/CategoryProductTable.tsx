
'use client';
import React from "react";
import { useState } from "react";
import MockProducts from "@/data/mockProducts.json";
import Image from "next/image";

//function ProductTable({category} : {category :string}) {
type Products = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;

};
    
function ProductTable({AlreadyFilteredProduct} : {AlreadyFilteredProduct : Products[]}) {
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    /*const filteredProduct = MockProducts.filter(
        (product : any ) => product.category.toLowerCase() === category.toLowerCase()
    );*/

    const toggleCheckBox = (id : number) => {
            setCheckedItems((prev) => 
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev ,id]
            );
    };

    return (
                                AlreadyFilteredProduct.map((prod : any) => (
                                    <tr key = {prod.id}>
                                        <td> {prod.name}   </td>
                                        <td> {prod.price}  </td>
                                        <td> {prod.description}  </td>
                                        <td> <Image src={prod.image} alt={prod.name} width={100} height={100} /></td>
                                        <td> 
                                            <input type = 'checkbox' checked = {checkedItems.includes(prod.id)} 
                                            onChange={() => toggleCheckBox(prod.id)} 
                                            />
                                        </td>
                                    </tr>
                                ))                                
              
    )
};

export default ProductTable;