import React from 'react'
import Cards from '../components/Cards';
 function Movies() {
  return (
    <div>
        <div className="text-center text-5xl my-10 font-bold">Trending Movies</div>
        <div className="flex flex-wrap justify-center text-2xl">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    </div>
  )
}
export default Movies