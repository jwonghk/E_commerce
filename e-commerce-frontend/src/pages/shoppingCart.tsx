import { useSelector, useDispatch } from "react-redux";
import type {RootState} from '../store/store'; 
import { toggleItem } from "../store/cartSlice";



const ShoppingCart = () => {
    const cartItems = useSelector((state : RootState) => state.adder.items);
    const dispatch = useDispatch();

    const handleToggle = (product : any) => {
        dispatch(toggleItem(product))
    }

    return (
 
         <div className="overflow-x-auto w-full">
            <table className="min-w-full table-auto border border-gray-300 shadow-sm bg-white rounded-md">
                <thead className="bg-red-100"> 
                <tr> 
                    <th className="px-4 py-2 border"> Product Name   </th>
                    <th className="px-4 py-2 border"> Description </th>
                    <th className="px-4 py-2 border"> Price </th>
                    <th className="px-4 py-2 border"> Photo </th>
                    <th className="px-4 py-2 border"> Select </th>
                </tr>
                </thead>  


                <tbody>
                    {cartItems.map(item => (
                        <tr key = {item.id}>
                            <td className="px-4 py-2 border">{item.name}</td>
                            <td className="px-4 py-2 border">{item.description}</td>
                            <td className="px-4 py-2 border text-green-600 font-semibold">{item.price}</td>
                            <td className="px-4 py-2 border text-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-16 object-contain inline-block"
                                />
                            </td>
                            <td className="px-4 py-2 border text-center">
                                <input 
                                    type="checkbox"
                                    checked={true}
                                    onChange={() => handleToggle(item)}
                                    className="w-4 h-4"
                                />
                            </td>
                        </tr>)
                        )
                    }
                    {cartItems.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center py-4 text-gray-500">
                            Your cart is empty.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            );
        };

export default ShoppingCart;
