import React from 'react'
import movielogo from '../Assets/logo.png';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <div className="flex pl-10 py-4 items-center bg-gray-900">
    <img src={movielogo} alt="movielogo" className=" w-[50px] md:w-20   x-space-8"></img>
    <Link to="/movies" className="text-green-300 font-bold px-5 text-xl md:text-3xl">Movies</Link>
    <Link to="/favourites" className="text-green-300 font-bold px-5 text-xl md:text-3xl">Favourites</Link>
    </div>
  )
}

export default NavBar