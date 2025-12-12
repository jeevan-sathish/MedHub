import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';



const Logout = () => {
  const navigate =useNavigate();

  function handleLogout(){
  navigate('/SignIn')
}
  return (
    <button className=' h-[40px] rounded-2xl flex flex-row items-center justify-center hover:text-red-600 font-bold'>
    Logout <FiLogOut className='text-[20px]'
    onClick={handleLogout}
     />
    </button>
  )
}

export default Logout