import React from 'react'
import ProductCard from './ProductCard'

const ProductsDiplay = ({products}) => {

   
  return (
    <div className=' z-1 w-[90%] mx-auto relative mt-[150px] '>
        {/* cards */}
        <div className='flex justify-center flex-wrap gap-[55px] pb-12'>
        {
          products?.map(product=>{
            return(
              <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} img={product.image}  />
            )
          })
        }

        </div>
    </div>
  )
}

export default ProductsDiplay