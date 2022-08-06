import React from 'react'
import Bannerpic from '../Assets/banner.jpeg';
 function Banner() {
  return (
    <div className={`bg-[url(${Bannerpic})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end `}>
        <div className=" text-xl md:text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-70 ">Thor : Love and Thunder</div>
    </div>
  )
}
export default Banner