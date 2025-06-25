'use client';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import type { RootState } from "../store/store";
import { toggleItem } from "../store/cartSlice"; 

type Products = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
};

function ProductTable({ AlreadyFilteredProduct }: { AlreadyFilteredProduct: Products[] }) {
  //const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const currentInCart = useSelector((state: RootState) => state.adder.items);

  const dispatch = useDispatch();

  const toggleCheckBox = (product : Products) => {
    /*
    setCheckedItems((prev) =>
      prev.includes(product.id) ? prev.filter((i) => i !== product.id) : [...prev, product.id]
    );*/
    dispatch(toggleItem(product));

  };

  return (
    <div className="p-4">
      {/* Responsive wrapper */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border border-gray-300 shadow-sm bg-white rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Photo</th>
              <th className="px-4 py-2 border">Select</th>
            </tr>
          </thead>
          <tbody>
            {AlreadyFilteredProduct.map((prod) => (
              <tr key={prod.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border whitespace-normal">{prod.name}</td>
                <td className="px-4 py-2 border whitespace-normal">{prod.description}</td>
                <td className="px-4 py-2 border text-green-600 font-semibold">{prod.price}</td>
                <td className="px-4 py-2 border text-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-24 h-16 object-contain inline-block"
                  />
                </td>
                <td className="px-4 py-2 border text-center">
                  <input
                    type="checkbox"
                    //checked={checkedItems.includes(prod.id)}
                    checked = {currentInCart.includes(prod)}
                    onChange={() => toggleCheckBox(prod)}
                    className="w-4 h-4"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
