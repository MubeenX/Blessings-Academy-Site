import React from 'react'
import logo from "../../Assets/Logos/Logo3.png"

const Header = () => {
  return (
    <div>
      
      
      <nav className="bg-transparent md:-mt-2 " >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="-mx-4 flex items-center">
            <img src={logo} className="h-5 mr-3" alt="Blessings Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"></span>
        </a>
        <div className="flex md:order-2">

          <div className= "px-10 py-0">
            
            <ul className="flex flex-col font-large p-4 md:p-0 mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-1 md:border-0 md:bg-transparent">

              <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700">Why Us?</a>
              </li>

              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700">Courses</a>
              </li>

              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:hover:text-green-500 md:p-0 md:dark:hover:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
              </li>


            </ul>
          </div>
           
          

          <button type="button" className="text-white bg-cyan-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          
        </div>
        
        </div>
      </nav>
      
    </div>
  )
}

export default Header
