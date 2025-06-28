
import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";



const checkout = () => {
    const allItemsInCart = useSelector((state : RootState) => state.adder.items);

        let totalPrice = 0;
            allItemsInCart.map(item => {
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
    
                </tr>
                </thead>  


                <tbody>
                    {allItemsInCart.map(item => (
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
                         
                        </tr>
                            )
                        )
                    }

                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={4} className="text-right px-4 py-2 font-bold">
                           The total price to be payed : ${totalPrice} 
                        </td>
                    </tr>
               </tfoot>
            </table>
        </div>

    );

};

export default checkout;
