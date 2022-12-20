import React from 'react'

const ProductCard = () => {
  return (
    <div className=' w-[360px] h-[450px] p-4 rounded-[30px] bg-gradient-to-b from-[#fffaf6] to-[#f5ae91] cursor-pointer relative z-10 group hover:shadow-2xl ease-in duration-300'>
        <img className='h-[250px] mx-auto rounded-2xl' src="https://m.media-amazon.com/images/I/81VYszGw+XL._UX425_.jpg" alt="" />

        <div >

        {/* Title */}
        <h4 className='text-product_title_color font-extrabold mt-3 text-[20px] text-center'>
            The Tshirt of Avishkar
        </h4>
        {/* price  */}
        <h4 className='text-product_price_color font-extrabold mt-3 text-[18px] text-center'>
            333$
        </h4>
        {/* description */}
        <h5 className='px-2 py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deserunt? Lorem , ...........
        </h5>
        
        <h5 className='text-[18px] font-extrabold text-center opacity-0 text-text_main_color  group-hover:opacity-100 transition-all duration-300'>
            Shop Now
        </h5>
        </div>

    </div>
  )
}

export default ProductCard