import React from 'react'
import ProductsDiplay from './ProductsDiplay'

const ProductsPage = () => {
  return (
    <section className=' '>
        <div className='bg-bg_main_color h-full  relative z-[1] pt-12'>


            <div className='bg-hero_bg_color h-[400px] w-[90%] rounded-[60px] left-[0%] right-0 mx-auto absolute z-0 flex justify-center '>
              
            <div className='flex w-full justify-around h-fit items-center text-text_main_color font-bold  mt-10'>

            <h4 className='text-[18px]   w-[300px]'>
              Home
            </h4>

              <h1 className='text-[2.5rem] font-extrabold text-center w-[300px]'>
                Shop
              </h1>

              <h4 className='text-[18px]  w-[300px]'>
              showing 1-12 out of 36 results
            </h4>

            </div>

            </div>


          {/* products list wi be diplayed below */}
          <ProductsDiplay />
        </div>
    </section>
  )
}

export default ProductsPage