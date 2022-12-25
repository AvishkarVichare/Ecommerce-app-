import React, { useContext, useEffect } from 'react'
import CartContext from '../../context/cartContext/CartContext';

const CartItem = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { cartItems, setCartItems } = cartContext;
  // console.log("this is ", cartItems)
 

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

  }, [cartItems])


  const handleRemove = () => {
    let count = 0;
    const newCart = cartItems.filter((e, index, arr) => {
      if (e.id == product.id) {
        if (count > 0) {
          return true;
        }
        else {
          count++;
          return false;
        }
      }
      else {
        return true;
      }
    })
        
        setCartItems(newCart)
      
    }


  return (
    <div className='flex bg-hero_bg_color rounded-xl p-5 h-[280px]'>
      <div className='flex items-center gap-6 mx-auto'>
        <div className='w-[180px]'>
          <img className='w-[180px] rounded-xl' src={product.image} alt="" />
        </div>

        <div className='rounded-xl px-6 py-10 bg-bg_main_color flex justify-between w-[55vw] '>
          <div className='w-[550px]'>
            <h4 className=' text-[30px]  font-bold   '>
              {
                product.title
              }
            </h4>
            <h5 className='text-base text-[#373a3a] text-justify'>
              {
                product.description
              }
            </h5>
          </div>
          <div className='flex flex-col items-center justify-between '>
            {/* price */}
            <h4 className=' text-[2rem] font-bold text-product_title_color'>
              Rs.
              {
                product.price
              }
              /-
            </h4>

            <button onClick={handleRemove} className='w-[150px] py-2 px-4 rounded-xl bg-hero_bg_color font-bold text-[18px]'>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem