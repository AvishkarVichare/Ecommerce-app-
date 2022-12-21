import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartLogo from '../assets/cart.png';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <header className="text-text_main_color font-extrabold text-[20px] body-font bg-bg_main_color">
      <div className="container mx-auto flex flex-wrap p-3 px-5 flex-col md:flex-row items-center ">
      <Link to='/' className="mr-7 hover:text-gray-900">
      <h3>
          LOgo
        </h3>
      </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center ">
          <Link to='/' className="mr-7 hover:text-gray-900">Home</Link>

          {/* categories  */}
          {/* <Link to='categories/jewelery' className="mr-7 hover:text-gray-900">Categories</Link> */}
          <div className=" cursor-pointer mr-7 hover:text-gray-900 group z-20 relative inline-block ">

            <div>
              Categories
            </div>
            <div className='flex flex-col  bg-[#FDE9E0] rounded-xl gap-2 absolute z-[22] opacity-0 invisible  group-hover:visible group-hover:opacity-100  ease-in-out duration-300 font-bold text-[18px] p-1'>
              <span onClick={()=>navigate("/categories/electronics")} className='border-t-2 cursor-pointer hover:shadow-lg '>Electronics</span>
              <span onClick={()=>navigate("/categories/jewelery")} className='border-t-2 cursor-pointer hover:shadow-lg '>jewelery</span>
              <span onClick={()=>navigate("/categories/men's clothing")} className='border-t-2 cursor-pointer hover:shadow-lg  '>Men's Clothing</span>
              <span onClick={()=>navigate("/categories/women's clothing")} className='border-t-2 cursor-pointer hover:shadow-lg '>Women's Clothing</span>
            </div>
          </div>

          <a className="mr-7 hover:text-gray-900">More</a>
        </nav>
        
        {/* cart  */}
        <div className='flex flex-col justify-center items-center'>
          <h4>
            3
          </h4>
          <img src={CartLogo} alt="" />
        </div>

      </div>
    </header>
  )
}

export default Navbar