import React from "react";
import MockProducts from "@/data/mockProducts";
import Image from "next/image";

function ProductsDetails() {
    return (
        <div>
        <h1 style= {{textAlign : 'center' , fontSize : '5rem'}}>  List of Products Found  </h1>
        <table> 
            <thead>
                <tr>
                    <th> Product Name</th>
                    <th> Price </th>
                    <th> Descriptions </th>
                    <th> Photo </th>
                </tr>
            </thead>
            <tbody>
                {MockProducts.map((item, id) => (
                    <tr key={id}>
                        <td style={{textAlign : 'center'}}> {item.name}</td>
                        <td style={{textAlign : 'center'}}> {item.price} </td>
                        <td style={{textAlign : 'center'}}> {item.description} </td>
                        <td> <Image
                            src = {item.image}
                            alt = {item.name}
                            height = {100}
                            width = {100}
                                />
                        </td>
                    </tr>
                    )
                )}
            </tbody>
        </table>
        </div>
    )
};

export default ProductsDetails;
