import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CartContext from '../../context/cartContext/CartContext';
import ProductContext from '../../context/productContext/ProductContext'
import ProductMainSkeleton from './ProductMainSkeleton';

const ProductMain = () => {

  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);
  const { cartItems, setCartItems } = cartContext;
  const { getProduct, product, setProduct, setIsLoading, isLoading } = productContext;
  const params = useParams();
  const navigate = useNavigate();

  console.log(cartItems)

  const handleBuyNow = () => {
    const oldData = [...cartItems];
    oldData.push(product);
    setCartItems(oldData);
    navigate('/u/cart');
  }

  const handleAddToCart = () => {
    const oldData = [...cartItems];
    oldData.push(product);
    setCartItems(oldData);
  }

  useEffect(() => {
    setIsLoading(true);
    setProduct({})
    getProduct(params.productid)
    // console.log(params)
  }, [])
  // console.log(product)

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  },[cartItems])

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

      {
        !isLoading?(
          <div className='bg-gradient-to-b from-[#fff0cf] to-[#f6c798] w-[80%] h-[500px]  z-10 relative top-[100px] mx-auto rounded-[60px] p-6 flex justify-center items-center gap-3'>

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
            <img className='h-[400px] mx-auto rounded-xl mt-6 mb-3' src={product.image} alt="" />
            <h4 className='font-bold text-product_title_color text-[1.8rem] text-center'>
              Rs.{product.price}/-
            </h4>
          </div>

          {/* add and price */}
          <div className='w-[20%] flex flex-col items-center gap-3'>

            <button onClick={handleBuyNow} className='text-[1.1rem] text-[#fcc30c] bg-[#000] py-2 px-5 rounded-2xl'>
              Buy Now
            </button>

            <h4>
              Or
            </h4>

            <button onClick={handleAddToCart} className='text-[1.1rem] text-[#fcc30c] bg-[#000] py-2 px-5 rounded-2xl'>
              Add To Cart
            </button>

          </div>

        </div>
        ):(
          <ProductMainSkeleton/>
        )
      }
       

      </div>
    </section>
  )
}

export default ProductMain