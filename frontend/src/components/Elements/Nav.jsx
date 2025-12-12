import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-14 bg-blue-300 flex flex-row justify-around items-center text-center shadow shadow-amber-200 sticky top-0 '>
    <h1 className='font-extrabold text-blue-700'>MED <span className='font-extrabold text-orange-800'>hub</span></h1>
       <div className=' flex gap-[30px] p-3.5 font-medium text-black '>
         <Link to='/' className='hover:text-gray-600' >Home</Link>
        <Link to='/About' className='hover:text-gray-600'>About</Link>
        <Link to='/Dashboard' className='hover:text-gray-600'>Dashboard</Link>
       </div>
    </div>
  )
}

export default Nav