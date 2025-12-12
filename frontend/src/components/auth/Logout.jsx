import React from 'react'
import { FiLogOut } from "react-icons/fi";


const Logout = () => {
  return (
    <button className=' h-[40px] rounded-2xl flex flex-row items-center justify-center hover:text-red-600 font-bold'>Logout <FiLogOut className='text-[20px]' /></button>
  )
}

export default Logout