import React from 'react'

const Navbar = () => {
  return (
    <header class="text-text_main_color font-extrabold text-[20px] body-font bg-bg_main_color">
  <div class="container mx-auto flex flex-wrap p-6 pt-10 flex-col md:flex-row items-center ">
    <h3>
        LOgo
    </h3>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">Categories</a>
      <a class="mr-5 hover:text-gray-900">More</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Navbar