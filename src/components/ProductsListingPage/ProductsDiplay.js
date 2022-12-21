import React, { useContext, useEffect } from 'react'
import ProductContext from '../../context/productContext/ProductContext'
import ProductCard from './ProductCard'

const ProductsDiplay = () => {

    const productContext = useContext(ProductContext);
    const {getAllProducts, products} = productContext;

    useEffect(()=>{
        getAllProducts()
    },[])

  return (
    <div className=' z-1 w-[90%] mx-auto relative mt-[150px] '>
        {/* cards */}
        <div className='flex justify-center flex-wrap gap-[55px] pb-12'>
        {
          products.map(product=>{
            return(
              <ProductCard title={product.title} price={product.price} description={product.description} img={product.image}  />
            )
          })
        }

        </div>
    </div>
  )
}

export default ProductsDiplay