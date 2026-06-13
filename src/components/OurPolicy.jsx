import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='mt-[150px] mb-[150px] '>
    <div className='max-w-[1300px] m-auto flex flex-col sm:flex-row justify-around text-center gap-8 sm:gap-2 text-gray-700'>
        <div className='flex flex-col' >
            <img className='w-12 m-auto ' src={assets.exchange_icon} alt="" />
            <p className='font-semibold mt-3'>Easy Exchange Policy</p>
            <p className='text-gray-400 '>We Offer Quick Exchange Policy</p>
        </div>

         <div className='flex flex-col' >
            <img className='w-12 m-auto ' src={assets.quality_icon} alt="" />
            <p className='font-semibold mt-3'>7 Days Free Return Policy</p>
            <p className='text-gray-400 '>We Offer Easy and Fast 7 Days Free Rerurn Policy</p>
        </div>

         <div className='flex flex-col' >
            <img className='w-12 m-auto ' src={assets.support_img} alt="" />
            <p className='font-semibold mt-3'>Best Customer Support</p>
            <p className='text-gray-400'>We Provide 24x7 Customer Care Support</p>
        </div>
       
       
    </div>

    </div>
  )
}

export default OurPolicy