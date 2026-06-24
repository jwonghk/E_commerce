import { useState } from "react";


const AddProduct = () => {

    //const [nextbox, addMoreBox] = useState(false);
    const [rows, setRows] = useState<Row[]>([ {
        name: "", price: "", description: "", photo: "", done: false
    }])


    /*
    const handleChange = () => {
        addMoreBox(nextbox)
    };*/

    type Row = {
        name: string,
        price: string,
        description: string,
        photo: string,
        done: boolean
    };

    const handleInputChange = <K extends keyof Row>(
        index: number,
        field: K,
        value: Row[K]
    ) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };
    
    const handleCheckBoxChange = (index : number) => {
        const updatedRows = [...rows];
        updatedRows[index].done = !updatedRows[index].done;
        setRows(updatedRows);

        if(index === updatedRows.length-1 && updatedRows[index].done) {
            setRows([...updatedRows,
            {name:"", price:"", description:"", photo: "", done: false}
        ])}
    }


    /*
    const handleInputChange = (index, field : any, value : any) => {
        const updateRows = [...rows];
        updateRows[index][field] = value;
    }*/

    return (
        <>
            <table className="min-w-full table-auto border border-gray-300 shadow-sm bg-white rounded-md">
                <thead className="border-b border-gray-800">
                    <tr> 
                        <th className="px-16 py-3 text-left underline"> Name </th>
                        <th className="px-16 py-3 text-right underline"> Price </th>
                        <th className="px-16 py-3 text-right underline"> Description </th>
                        <th className="px-16 py-3 text-left underline"> Photo</th>
                        <th className="px-16 py-3 text-center underline"> Done (checkbox) </th>
                    </tr>
                </thead>
                <tbody> 
                    {rows.map((row,index) => (
                        <tr key={index}>
                            <td className="text-left px-4 py-2"> 
                                <textarea 
                                    value={row.name}
                                    onChange={(e) => handleInputChange(index, "name" , e.target.value )}
                                />
                            </td>
                            <td className="text-left px-4 py-2">
                                <textarea 
                                    value={row.price}
                                    onChange={(e)=> handleInputChange(index, "price", e.target.value)}
                                />
                            </td>

                            <td>
                                <textarea            
                                    value={row.description}
                                    onChange={(e)=> handleInputChange(index, "description", e.target.value)}
                                />
                            </td>

                            <td>
                                <textarea              
                                    value={row.photo}
                                    onChange={(e) => handleInputChange(index, "photo", e.target.value)}
                                />
                            </td>

                            <td>
                                <input  
                                    type="checkbox"
                                    checked={row.done}
                                    onChange={(e) => handleCheckBoxChange(index)}
                                />
                            </td>
                        </tr>         
                    ))}
                </tbody>
            </table>
        </>
    );
}


export default AddProduct;
