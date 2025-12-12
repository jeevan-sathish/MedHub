import React, { memo, useContext, useState, useEffect } from "react";
import heroimage from "../../assets/heroimage.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FaHospitalUser, FaChartLine, FaMapMarkedAlt, FaStar } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg",
  "https://images.pexels.com/photos/6129057/pexels-photo-6129057.jpeg",
  "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg"
];

const Home = () => {
  const { user } = useContext(UserContext);


  return (
    <div className="w-full min-h-screen bg-blue-200/40">

      
      <section className="w-full min-h-[90vh] flex justify-center items-center">
        <div className="w-[90%] max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to <span className="text-blue-600">MedHub</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              One-stop platform for NEET aspirants to explore India’s top Government Medical Colleges.
            </p>

            {
              user ? (
                <Link to="/Dashboard">
                  <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition">
                    Explore Colleges
                  </button>
                </Link>
              ) : (
                <Link to="/SignIn">
                  <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition">
                    Explore Colleges
                  </button>
                </Link>
              )
            }
          </div>

      
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroimage}
              alt="hero"
              className="w-[90%] max-w-[500px] rounded-3xl shadow-2xl shadow-blue-300 object-cover"
            />
          </div>
        </div>
      </section>

      
    

  
      <section className="w-full py-14 flex justify-center">
        <div className="w-[90%] max-w-6xl grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaHospitalUser className="text-4xl text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800">1,00,000+ Seats</h3>
            <p className="text-gray-600 mt-2">Explore detailed seat distribution across India.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaMapMarkedAlt className="text-4xl text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800">600+ Colleges</h3>
            <p className="text-gray-600 mt-2">Search colleges by state, city, rating, and course type.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaChartLine className="text-4xl text-blue-600 mb-3" />

              <h3 className="text-xl font-bold text-gray-800">AI-Enhanced Analysis</h3>

              <p className="text-gray-600 mt-2">
                Get full AI-powered insights of every medical college — rankings, past trends,
                fee structure, seat distribution, expected cutoffs, and personalized recommendations.
              </p>
          </div>


        </div>
      </section>

    
      <section className="w-full py-16 bg-blue-100/60">
        <div className="w-[90%] max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose MedHub?</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            MedHub provides verified, structured, and regularly updated medical college data so NEET aspirants can make confident decisions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaStar className="text-3xl text-yellow-500 mb-3" />
              <h4 className="font-bold text-lg">Verified Data</h4>
              <p className="text-gray-600 mt-2">Official sources + real-time updates.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaHospitalUser className="text-3xl text-green-500 mb-3" />
              <h4 className="font-bold text-lg">Student Friendly</h4>
              <p className="text-gray-600 mt-2">Clean UI designed for clarity and speed.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaMapMarkedAlt className="text-3xl text-purple-500 mb-3" />
              <h4 className="font-bold text-lg">State-wise Insights</h4>
              <p className="text-gray-600 mt-2">Explore & compare colleges instantly.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-16 flex justify-center">
        <div className="w-[90%] max-w-4xl text-center space-y-6 p-10 bg-white rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold">Start Your Medical Journey Today!</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Track cutoffs, compare colleges, and make smarter decisions with MedHub.
          </p>

          <Link to={user ? "/Dashboard" : "/SignIn"}>
            <button className="px-8 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition">
              {user ? "Go to Dashboard" : "Create Free Account"}
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default memo(Home);
