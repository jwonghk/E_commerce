import {useParams} from 'react-router-dom';
import ProductTable from '../components/CategoryProductTable';
import mockProducts from '../data/mockProducts.json';

const Category = () => {
    const {categoryType} = useParams();

    const filterProducts = mockProducts.filter((product)=> product.category.toLowerCase() === categoryType?.toLowerCase());


    return (
         <ProductTable AlreadyFilteredProduct={filterProducts} ></ProductTable>
    );
};

export default Category;