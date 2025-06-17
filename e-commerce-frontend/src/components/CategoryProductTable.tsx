
'use client';
import { useState } from "react";
//import Image from "next/image";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {AlreadyFilteredProduct.map((prod) => (
        <div
          key={prod.id}
          className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
        >
          
          <div className="w-44 h-42 flex items-center justify-center overflow-hidden rounded-md mb-2">
            <img src={prod.image} alt={prod.name} className="w-42 h-32 object-contain" />
          </div>
          <h2 className="text-xl font-semibold mt-2">{prod.name}</h2>
          <p className="text-gray-600">{prod.description}</p>
          <p className="text-green-600 font-bold">{prod.price}</p>
          <div className="mt-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={checkedItems.includes(prod.id)}
                onChange={() => toggleCheckBox(prod.id)}
              />
              Select
            </label>
          </div>
        </div>
      ))}
    </div>                        
              
    )
};

export default ProductTable;