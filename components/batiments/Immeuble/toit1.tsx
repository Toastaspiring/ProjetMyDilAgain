import React from 'react'

const toit1 = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='flex w-full justify-around items-end'>
        <div className="flex w-8 aspect-square bg-red-400"></div>
        <div className="flex w-20 h-4 bg-red-200"></div>
      </div>
      <div className="flex w-full h-8 bg-gray-400 border-2 border-black"></div>
      <div className="flex w-[95%] h-6 bg-gray-400 border-x-2 border-b-2 border-black"></div>
    </div>
  )
}

export default toit1