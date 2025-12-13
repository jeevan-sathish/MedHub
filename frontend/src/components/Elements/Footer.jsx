import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white py-10 mt-10 ">
      <div className="max-w-7xl mx-auto w-[90%] grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ---------- LEFT SECTION ---------- */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaGithub className="text-3xl" /> MedHub Project
          </h2>
          <p className="text-sm opacity-80 leading-6">
            An educational platform providing accurate and easy access to
            government medical colleges across India.  
            Explore & learn with confidence.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:sathishjeevan2004@gmail.com"
              className="text-2xl hover:text-red-300 transition-transform transform hover:scale-110"
            >
              <TbBrandGmail />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ---------- MIDDLE SECTION ---------- */}
        <div className="flex flex-col items-center md:items-start space-y-3 text-lg">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <Link
            to="/SignUp"
            className="hover:underline hover:text-gray-300 transition"
          >
            Sign Up
          </Link>

          <Link
            to="/SignIn"
            className="hover:underline hover:text-gray-300 transition"
          >
            Sign In
          </Link>

          <Link
            to="/about"
            className="hover:underline hover:text-gray-300 transition"
          >
            About Us
          </Link>
        </div>

        {/* ---------- RIGHT SECTION ---------- */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="text-xl font-semibold">Contact Us</h3>

          <a
            href="tel:8792811280"
            className="flex md:justify-end justify-center items-center gap-2 hover:text-gray-300 transition"
          >
            <FaPhoneAlt /> 8792811280
          </a>

          <a
            href="mailto:sathishjeevan2004@gmail.com"
            className="hover:text-gray-300 transition"
          >
            sathishjeevan2004@gmail.com
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            Visit our GitHub →
          </a>
        </div>
      </div>

      {/* ---------- COPYRIGHT SECTION ---------- */}
      <div className="w-full text-center mt-10 border-t border-blue-700 pt-4 opacity-80 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">MedHub</span> —  
        All Rights Reserved. | Made with ❤️ in India
      </div>
    </footer>
  );
};

export default Footer;
