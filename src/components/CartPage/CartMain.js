import { data } from 'autoprefixer';
import React, { useContext, useEffect } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import CartItem from './CartItem';

const CartMain = () => {
  const cartContext = useContext(CartContext);
  const {cartItems, setCartItems} = cartContext;

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('cart'));
    // console.log(data)
    setCartItems(data)
  },[])


  return (

    <section>

      <div className='flex flex-col bg-bg_main_color  gap-4  p-4 px-10 rounded-xl'>
          {
            cartItems?.map(item=>{
              return(
                <CartItem product = {item} />
              )
            })
          }

      </div>
    </section>
   
  )
}

export default CartMain