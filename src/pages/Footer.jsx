import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
 

<div className="min-h-[35vh] max-w-[1350px]  m-auto w-full bg-zinc-100 border-t border-zinc-300 flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 md:px-16 py-10 gap-10">

  {/* LEFT SECTION */}
  <div className="w-full sm:max-w-[45%]">
    <Link to="/" className="inline-block">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.3em] uppercase text-zinc-900 font-serif transition duration-300 hover:text-purple-600">
        TrendZ
      </h1>
    </Link>

    <p className="text-sm text-neutral-600 leading-7 max-w-md mt-3">
      Trendz is a modern e-commerce platform offering a wide range of fashion products designed to meet the evolving needs of customers with a focus on quality, affordability, and style.
    </p>
  </div>

  {/* MIDDLE SECTION */}
  <div className="flex flex-col gap-3 text-[16px]">
    <Link className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600" to="/ourPolicy">
      Our Policy
    </Link>
    <Link className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600" to="/about">
      About Us
    </Link>
    <Link className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600" to="/terms">
      Terms & Services
    </Link>
    <Link className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600" to="/orders">
      Orders
    </Link>
  </div>

  {/* RIGHT SECTION - SOCIAL MEDIA */}
  <div className="flex flex-col gap-3">
    

    
     <a href="#" className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600"> Facebook </a>
    
     <a href="#" className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600">LinkedIn</a>
     <a href="#" className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600">Snapchat</a>
     <a href="#" className="font-semibold tracking-[0.1em] uppercase text-zinc-900 transition duration-300 hover:text-purple-600">LinkedIn</a>
  </div>

   

</div>
  )
}

export default Footer