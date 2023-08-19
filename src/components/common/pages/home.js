import React from 'react'
import Header from '../header'
import backgroundImage from "../../../Assets/background8.png"
import scrollicon from "../../../Assets/Scroll_Down.png"

// ...

const Home = () => {
  return (
    <div>

{/* <section className="bg-center bg-no-repeat bg-cover bg-slate-600 bg-blend-multiply h-[100vh]" style={{ backgroundImage: `url(${backgroundImage})`}}></section> */}


<section className="bg-center bg-no-repeat bg-cover bg-slate-0 bg-blend-multiply " style={{ backgroundImage: `url(${backgroundImage})`}}>    
<Header/>

     <div className="px- mx-auto max-w-screen-xl text-left py-auto lg:py-[6.42rem]">
      <div className="mx-12 w-[35rem]">

        <span className="mb-4 text-xl font-bold tracking-tight leading-none text-black md:text-4xl lg:text-[2.3rem]/[3rem]">Elevate Your Learning Journey with </span>
        <span className="mb-4 text-xl font-bold tracking-tight leading-none text-[#41b3e0] md:text-4xl lg:text-[2.3rem]/[3rem]" >Blessings Academy of Online Studies.</span>

      </div>

        <p className=" mb-8 mt-4 text-lg text-left font-normal text-black lg:text-[1rem]/[1.35rem] sm:px-12 lg:px-12 w-[40rem] "> Online certification courses in Digital Marketing, Web/App Development, Programming, Data Science, and 20+ more domains. </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4 mx-12">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ">
            Explore Courses
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>

    </div>
    <img class=" object-center md:object-bottom h-[7rem] mx-auto" src ={scrollicon}/>     
</section>

    </div>
  )
}

export default Home
