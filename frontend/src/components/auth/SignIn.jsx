import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const SignIn = () => {
  const navigate =useNavigate()
    const { setUser } = useContext(UserContext);
  const [data ,setData]= useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  }

function handleSubmit(e) {
  e.preventDefault();

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert("Error: " + response.error);
      } else {
        alert("Login successful!");
        setUser(response.user)
        navigate('/Dashboard')
        console.log("Logged in user:", response.user);
        
      }

      setData({ email: "", password: "" }); // reset form
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Login failed");
    });
}


  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-5 border border-blue-200"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 -mt-3 mb-2">
          Sign in to your MedHub account
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 outline-none shadow-sm"
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 outline-none shadow-sm"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <p className="text-center text-gray-600 mt-2">
          Don’t have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 font-semibold hover:underline">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
