import React from 'react'

const CartItem = ({product}) => {
  return (
    <div className='flex bg-hero_bg_color rounded-xl p-5'>
        <div className='flex items-center gap-6'>
            <img className='h-[250px]' src={product.image} alt="" />
            <h4 className='text-[30px] w-[350px] font-bold'>
              {
                product.title
              }
            </h4>
        </div>
    </div>
  )
}

export default CartItem