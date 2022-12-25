import React from 'react'

const ProductMainSkeleton = () => {
  return (
    <div className='bg-gradient-to-b from-[#fff0cf] to-[#f6c798] w-[80%] h-[500px]  z-10 relative top-[100px] mx-auto rounded-[60px] p-6 flex justify-center items-center gap-3'>

    {/* title and description */}
    <div className='w-[30%] '>

      <h1 className='text-[2.3rem] font-bold rounded-xl w-[300px] h-[20px] bg-[#fde8c4] text-product_title_color'>
        {
          
        }
      </h1>

      <h4 className='text-product_title_color  rounded-xl w-[300px] h-[400px] bg-[#fde8c4]'>
        {
        }
      </h4>

    </div>

    {/* image and price */}
    <div className=' h-[400px] w-[300px] bg-[#fde8c4] rounded-xl'>
      <h4 className='font-bold text-product_title_color text-[1.8rem] text-center'>
        Rs....../-
      </h4>
    </div>

    {/* add and price */}
    <div className='w-[20%] flex flex-col items-center gap-3'>

      <button  className='w-[150px] h-[20px] text-[#fcc30c] bg-[#000] py-2 px-5 rounded-2xl'>
      </button>

      <h4>
        Or
      </h4>

      <button className='w-[150px] h-[20px] text-[#fcc30c] bg-[#000] py-2 px-5 rounded-2xl'>
      </button>

    </div>

  </div>

  )
}

export default ProductMainSkeleton