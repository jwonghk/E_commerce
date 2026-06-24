
const AdminPage = () => {

    return (
        
        <div className="flex flex-col gap-6">
            <table className="min-w-full table-auto border border-gray-300 shadow-sm bg-white rounded-md">
                <caption style={{textAlign:'left' , fontFamily: 'sans-serif', fontSize: '28px'}}>
                    Shopping Carts List
                </caption>
                <thead className="bg-blue-200">
                    <tr>
                        <th className="px-6 py-3 text-left">Order #</th>
                        <th className="px-6 py-3 text-left">Shopper Name</th>
                        <th className="px-6 py-3 text-left">Items Currently In Cart</th>
                    </tr>
                </thead>
            </table >
        

            <table className="min-w-full table-auto border border-gray-300 shadow-sm bg-white rounded-md">
                <caption style={{textAlign:'left' , fontFamily: 'sans-serif', fontSize: '28px'}}>
                    Confirmed Order
                </caption>
                <thead className="bg-blue-200">
                    <tr>
                        <th className="px-6 py-3 text-left">Order #</th>
                        <th className="px-6 py-3 text-left">Shopper Name</th>
                        <th className="px-6 py-3 text-left">Items Currently In Cart</th>
                    </tr>
                </thead>
            </table>
        </div>

    );
}

export default AdminPage;