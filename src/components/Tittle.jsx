import React from 'react'

const Tittle = ({text1 , text2}) => {
  return (
    <div className='inline-flex gap-3 mt-3 items-center sm:h-[10vh]  lg:h-[18vh]  w-full flex justify-center items-center'>
        <p className='text-gray-500 md:text-2xl lg:text-4xl'>{text1} <span className='text-gray-700 md:text-2xl lg:text-4xl font-medium'>{text2}</span></p>
        <p className='w-10 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 mt-3'></p>
    </div>
  )
}

export default Tittle