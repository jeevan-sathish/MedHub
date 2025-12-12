import React, { memo } from "react";
import heroimage from "../../assets/heroimage.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white">
      <section className="w-[90%] max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
      
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroimage}
            alt="hero"
            className="w-[90%] max-w-[500px] rounded-3xl shadow-2xl shadow-blue-200 object-cover"
          />
        </div>

       
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-600">MedHub</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Find your dream Government Medical College in India — explore
            cut-offs, fees, seats, and rankings all in one place.
          </p>

          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition">
            <Link to='/SignIn'>Explore Colleges</Link>
          </button>
        </div>

      </section>
    </div>
  );
};

export default memo(Home);
