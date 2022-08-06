import React from 'react'
import Cardimg from '../Assets/cardimg.jpeg';

 function Cards() {
  return (
    <div>
        <div className={`bg-[url(${Cardimg})] h-[20vh] w-[150px] md:h-[50vh] md:w-[350px] bg-center bg-cover rounded-xl flex items-end m-8 hover:scale-110 ease-out duration-300`}>
            <div className="text-center text-white bg-gray-900 w-full rounded-b-xl py-3">Conjuring 3</div>
        </div>
    </div>
  )
}
export default Cards