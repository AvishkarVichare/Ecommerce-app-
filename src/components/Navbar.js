import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <header className="text-text_main_color font-extrabold text-[20px] body-font bg-bg_main_color">
      <div className="container mx-auto flex flex-wrap p-6 pt-10 flex-col md:flex-row items-center ">
        <h3>
          LOgo
        </h3>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center ">
          <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>

          {/* categories  */}
          {/* <Link to='categories/jewelery' className="mr-5 hover:text-gray-900">Categories</Link> */}
          <div className=" cursor-pointer mr-5 hover:text-gray-900 group z-20 relative inline-block ">

            <div>
              Categories
            </div>
            <div className='flex flex-col  bg-[#FDE9E0] rounded-xl gap-2 absolute z-20 opacity-0 invisible  group-hover:visible group-hover:opacity-100  ease-in-out duration-300 font-bold text-[18px] p-1'>
              <span onClick={()=>navigate("/categories/electronics")} className='border-t-2 cursor-pointer '>Electronics</span>
              <span onClick={()=>navigate("/categories/jewelery")} className='border-t-2 cursor-pointer '>jewelery</span>
              <span onClick={()=>navigate("/categories/men's clothing")} className='border-t-2 cursor-pointer '>Men's Clothing</span>
              <span onClick={()=>navigate("/categories/women's clothing")} className='border-t-2 cursor-pointer '>Women's Clothing</span>
            </div>
          </div>

          <a className="mr-5 hover:text-gray-900">More</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar