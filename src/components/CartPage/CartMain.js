import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import CartItem from './CartItem';





const CartMain = () => {
  const cartContext = useContext(CartContext);
  const { cartItems, setCartItems, subTotal, setSubTotal } = cartContext;

  useEffect(() => {

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setSubTotal(total);
    localStorage.setItem('total', subTotal);

    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])


  return (

    <section>

      <div className='flex justify-center bg-bg_main_color h-[100vh] py-20 gap-5' >

        <div className='bg-hero_bg_color  rounded-2xl h-[400px]  w-[350px] order-2 p-3 flex flex-col items-center justify-center'>

          <div className='bg-bg_main_color px-6 py-20 rounded-xl'>
            <h2 className='text-[1.5rem]  flex justify-center gap-3'>
              <span className='font-bold'>
                Grand Total:
              </span>
              <span>
                Rs.
                {
                  subTotal
                }
              </span>
            </h2>
            <button className='bg-hero_bg_color py-1 px-2 rounded-xl font-bold'>
              Check Out
            </button>
          </div>

        </div>

        <div className='flex flex-col   gap-4   rounded-xl'>
          {
            cartItems?.map((product, index, arr) => {
              if (!(arr[index].id == arr[index - 1])) {
                return (
                  <CartItem key={index} product={product} />
                )
              }
              else {
                return <></>
              }

            })
          }

        </div>
      </div>
    </section>

  )
}

export default CartMain