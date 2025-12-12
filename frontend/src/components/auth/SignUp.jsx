import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate =useNavigate()
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    country: "",
    mobile: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  }

 function handleSubmit(e) {
  e.preventDefault();

  // Send POST request to backend
  fetch("http://localhost:3000/users", {
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
        alert("User registered successfully!");
        navigate('/SignIn')
        console.log("Created user:", response.user);
        // Optionally, reset form
        setData({
          name: "",
          age: "",
          email: "",
          password: "",
          gender: "",
          city: "",
          country: "",
          mobile: ""
        });
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Failed to register user");
    });
}


  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-xl border border-blue-200"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Create Your Account
        </h1>
        <br />
        <p className="text-center text-gray-600 -mt-3 mb-6">
          Join MedHub and explore government medical colleges
        </p>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="inputBox"
            required
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={data.age}
            onChange={handleChange}
            className="inputBox"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="inputBox"
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="inputBox"
            required
          />

          <select
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className="inputBox"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="inputBox"
            required
          />

          <input
            type="text"
            placeholder="Country"
            name="country"
            value={data.country}
            onChange={handleChange}
            className="inputBox"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            name="mobile"
            value={data.mobile}
            onChange={handleChange}
            className="inputBox"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        <div className="flex justify-center items-center pt-[20px]">
          <p>Already having an Account?
            <Link to='/SignIn '
             className=" text-blue-700 text-center">
             SignIn</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
