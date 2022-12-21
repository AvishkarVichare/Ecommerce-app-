import React from 'react'
import AddCartLogo from '../../assets/add_cart.svg';
import {useNavigate} from 'react-router-dom';

const ProductCard = ({title, price, description, img}) => {
    const navigate = useNavigate()
    const handleClickOnCard = ()=>{
        navigate(`/p/${title}`)
    }
  return (
    <div  className=' w-[360px] h-[450px] p-4 rounded-[30px] bg-gradient-to-b from-[#fffaf6] to-[#f5ae91]  relative z-10 group hover:shadow-2xl ease-in duration-300'>

        <button className='absolute right-5 top-5 z-12 p-2 bg-text_main_color rounded-xl'>
        <img className='h-[25px] invert' src={AddCartLogo} alt="" />
        </button>

        <div onClick={handleClickOnCard} >
        
        {/* product image  */}
        <img className='h-[250px] mx-auto rounded-2xl z-10' src={img} alt="" />


        {/* Title */}
        <h4 className='text-product_title_color font-extrabold mt-3 text-[20px] text-center'>
            {title?.length>25?title.slice(0,25).concat("..."):title}
        </h4>
        {/* price  */}
        <h4 className='text-product_price_color font-extrabold mt-3 text-[18px] text-center'>
           Rs.{price}/-
        </h4>
        {/* description */}
        <h5 className='px-2 py-2'>
        {description?.length>60?description.slice(0,60).concat("..."):description}
           {}
        </h5>
        
        <h5 className='text-[18px] font-extrabold text-center opacity-0 text-text_main_color  group-hover:opacity-100 transition-all duration-300'>
            Shop Now
        </h5>
        </div>

    </div>
  )
}

export default ProductCard