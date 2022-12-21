import ProductContext from "./ProductContext";
import axios from 'axios';
import { useState } from "react";

const ProductState = (props)=>{

    const [products, setProducts] = useState([]);

    const getAllProducts = async()=>{
        const res = await axios.get('https://fakestoreapi.com/products');
        // console.log(res);
        setProducts(res.data);
    }

    const getProductsByCategory = async()=>{
        const res = await axios.get('https://fakestoreapi.com/products/category/jewelery');
        setProducts(res.data);
    }

    return(
        <ProductContext.Provider value={{getAllProducts, products, getProductsByCategory}}>
            {
                props.children
            }
        </ProductContext.Provider>
    )
}

export default ProductState;