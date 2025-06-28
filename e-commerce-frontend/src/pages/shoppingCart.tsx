import { useSelector, useDispatch } from "react-redux";
import type {RootState} from '../store/store'; 
import { toggleItem } from "../store/cartSlice";
import { useState } from "react";
import { useNavigate} from "react-router-dom";




const ShoppingCart = () => {
    const cartItems = useSelector((state : RootState) => state.adder.items);

    const toNavigate = useNavigate();


    // use a state to capture the temporary status of items  i.e. whether
    // the items are selected or deselected
    const [currentInCart, updateInCart] = useState(cartItems);
    const dispatch = useDispatch();


    const handleToggle = (product : any) => {
        //dispatch(toggleItem(product))
        updateInCart((prev) => 
            prev.includes(product) ? prev.filter((p) => p.id !== product.id) : [...prev, product]
        )
    };

    const confirmSelections = () => {
        cartItems.map((anItemInCart) => {
            if (currentInCart.includes(anItemInCart)) {
                console.log("Item stills in both previous Cart and current Cart!");
            } else {
                dispatch(toggleItem(anItemInCart))
                console.log("Item Just update to be included in Cart");
            }
        })
    };

    let totalPrice = 0;
    currentInCart.map(item => {
        //totalPrice = totalPrice + Number(item.price);
        totalPrice += parseFloat(item.price.replace(/[^0-9.]/g, ''));
    });



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
                                    checked={currentInCart.includes(item)}
                                    //checked={false}
                                    //checked={currentInCart.includes(item)}
                                    onChange={() => handleToggle(item)}
                                    className="w-4 h-4"
                                />
                            </td>
                        </tr>
                            )
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

                <tfoot>
                    <tr>
                        <td colSpan={5} className="text-right px-4 py-2 font-bold">
                            Total price : ${totalPrice} 
                        </td>
                    </tr>
                    <tr>
                        
                        <td colSpan={5} className="text-center px-7 py-2 font-bold">
                            <button onClick={() => toNavigate('/')} >
                                Back to Home Page
                            </button>

                            <button onClick={confirmSelections} >                        
                                Confirm Selections
                            </button>
                            <button onClick={()=> toNavigate('/checkingOutPage')} >                        
                                Proceed To Checkout
                            </button>

                        </td>
                    </tr>

                    

                </tfoot>
         
            </table>

        </div>
            
            
            );
        };

export default ShoppingCart;
