import ProductContext from "./ProductContext";
import axios from 'axios';
import { useState } from "react";

const ProductState = (props)=>{

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getAllProducts = async()=>{
        const res = await axios.get('https://fakestoreapi.com/products');
        // console.log(res);
        setIsLoading(false)
        setProducts(res.data);
    }

    const getProductsByCategory = async(categorie)=>{
        const res = await axios.get(`https://fakestoreapi.com/products/category/${categorie}`);
        setIsLoading(false)

        setProducts(res.data);
    }

    const getProduct = async(productId)=>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        // console.log(res.data);
        setProduct(res.data)

    }

    return(
        <ProductContext.Provider value={{getAllProducts, products, setProducts,      getProductsByCategory, getProduct, product, setProduct, isLoading, setIsLoading}}>
            {
                props.children
            }
        </ProductContext.Provider>
    )
}

export default ProductState;