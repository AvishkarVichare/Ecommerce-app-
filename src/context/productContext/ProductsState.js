import ProductContext from "./ProductContext";
import axios from 'axios';
import { useState } from "react";

const ProductState = (props)=>{

    const [products, setProducts] = useState([]);

    const getAllProducts = async()=>{
        const res = await axios.get('https://fakestoreapi.com/products');
        // const res = await axios.get('https://fakestoreapi.com/products/category/jewelery');
        // console.log(res);
        setProducts(res.data);
    }

    return(
        <ProductContext.Provider value={{getAllProducts, products}}>
            {
                props.children
            }
        </ProductContext.Provider>
    )
}

export default ProductState;