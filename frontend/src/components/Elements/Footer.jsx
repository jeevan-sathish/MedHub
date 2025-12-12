import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto w-[90%] grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* GitHub Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex items-center gap-3">
            <FaGithub className="text-4xl" />
            <p className="text-2xl font-semibold">GitHub</p>
          </div>
          <p className="text-sm leading-5 opacity-90">
            View our source code and contribute to the project on GitHub.
          </p>
        </div>

        {/* Auth Links Section */}
        <div className="flex flex-col items-center space-y-2 text-lg">
          <Link
            to="/SignUp"
            className="hover:text-gray-300 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/SignIn"
            className="hover:text-gray-300 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-right space-y-2">
          <p>
            <span className="font-semibold">Contact:</span> 8792811280
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            sathishjeevan2004@gmail.com
          </p>
          <p className="hover:text-gray-300 transition cursor-pointer">
            Visit GitHub
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
