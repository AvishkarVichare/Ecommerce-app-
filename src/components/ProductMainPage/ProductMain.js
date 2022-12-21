import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ProductContext from '../../context/productContext/ProductContext'

const ProductMain = () => {

  const productContext = useContext(ProductContext);
  const {getProduct, product} = productContext;
  const params = useParams();

  useEffect(()=>{
    getProduct(params.productid)
    // console.log(params)
  },[])
  console.log(product)

  return (
    <section className='bg-bg_main_color h-[100vh] relative '>
      <div>

        <div className='bg-hero_bg_color h-[400px] w-[90%] rounded-[60px] left-[0%] right-0 mx-auto absolute z-0 flex justify-center '>

          <div className='flex w-full justify-around h-fit items-center text-text_main_color font-bold  mt-7'>

            <h4 className='text-[18px]   w-[300px]'>
              Product Details
            </h4>

            <h1 className='text-[2.5rem] font-extrabold text-center '>
              Product Details
            </h1>

            <h4 className='text-[18px]  w-[300px]'>
              showing 1-12 out of 36 results
            </h4>

          </div>

        </div>

        <div className='bg-gradient-to-b from-[#fff0cf] to-[#f6c798] w-[80%] h-[500px]  z-10 relative top-[100px] mx-auto rounded-[60px] p-6 flex justify-center items-center'>

          {/* title and description */}
          <div className='w-[30%] '>

            <h1 className='text-[2.3rem] font-bold text-product_title_color'>
              {
                product.title
              }
            </h1>

            <h4 className='text-product_title_color'>
              {
                product.description
              }
            </h4>

          </div>

          {/* image and price */}
          <div className='w-[50%] '>
              <img className='  rounded-xl mt-6' src={product.image} alt="" />
              <h4 className='font-bold text-product_title_color text-[1.8rem] text-center'>
                Rs.{product.price}/-
              </h4>
          </div>

          {/* add and price */}
          <div className='w-[20%] flex flex-col items-center gap-3'>
              
          <button className='text-[1.3rem] text-[#fcc30c] bg-[#000] py-2 px-5 rounded-2xl'>
                Buy Now
              </button>

              <h4>
                Or
              </h4>

              <button className='text-[1.2rem] text-[#fcc30c] bg-[#000] py-2 px-5 rounded-2xl'>
                Add To Cart
              </button>
            
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProductMain