import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSchoolSharp } from "react-icons/io5";
import Logout from "../auth/Logout";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <nav className="relative w-full h-16 bg-blue-400 px-6 flex items-center justify-between sticky top-0 z-50 shadow-md">

     
      <div className="flex items-center gap-2 text-2xl font-extrabold">
        <h1 className="text-blue-700">
          MED<span className="text-orange-800">hub</span>
        </h1>
        <IoSchoolSharp className="text-black text-3xl" />
      </div>

    
      <div className="hidden md:flex gap-8 font-semibold text-black">
        <Link to="/" className="hover:text-gray-700 transition font-medium text-white">Home</Link>
        <Link to="/About" className="hover:text-gray-700 transition font-medium text-white">About</Link>
        
      </div>

    
      <div className="hidden md:block">
        <Logout />
      </div>

    
      <div className="md:hidden text-2xl font-bold cursor-pointer" onClick={handleMenu}>
        ☰
      </div>


      {menu && (
        <div className="md:hidden absolute top-16 right-0 w-48 bg-blue-600 text-white flex flex-col p-4 shadow-lg rounded-bl-xl">

          <Link
            to="/"
            className="py-2 border-b border-blue-400 hover:bg-blue-700 rounded"
            onClick={() => setMenu(false)}
          >
            Home
          </Link>

          <Link
            to="/About"
            className="py-2 border-b border-blue-400 hover:bg-blue-700 rounded"
            onClick={() => setMenu(false)}
          >
            About
          </Link>

          

          <div className="py-2">
            <Logout />
          </div>

        </div>
      )}
    </nav>
  );
};

export default Nav;
