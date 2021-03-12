import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  return ( 
    <h1 class=" bg-purple-200 text-purple-900 text-center border-black font-bold p-6 text-5xl">
      <Link to='/' class="hover:text-indigo-500">Request Tub</Link>
    </h1>
  )
}

export default Header