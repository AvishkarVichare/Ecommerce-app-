import React from 'react'
import ProductCard from './ProductCard'

const ProductsDiplay = () => {
  return (
    <div className=' z-1 w-[90%] mx-auto relative mt-[150px] '>
        {/* cards */}
        <div className='flex justify-center flex-wrap gap-[55px] pb-12'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        </div>
    </div>
  )
}

export default ProductsDiplay