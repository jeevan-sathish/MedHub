import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-blue-50 p-4">
        <p className="text-lg text-gray-700">Please login first</p>
      </div>
    );
  }

  function handleLogOut() {
    navigate("/SignIn");
  }

  const userAttributes = [
    { label: "Name", value: user.name },
    { label: "Age", value: user.age },
    { label: "Email", value: user.email },
    { label: "Gender", value: user.gender },
    { label: "City", value: user.city },
    { label: "Country", value: user.country },
    { label: "Mobile", value: user.mobile },
  ];

  // Calculate Profile Completion Percentage
  const filledFields = userAttributes.filter((i) => i.value && i.value !== "").length;
  const totalFields = userAttributes.length;
  const completeness = Math.round((filledFields / totalFields) * 100);

  return (
    <div className="w-full min-h-screen bg-blue-50 p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Welcome, {user.name}! 👋
      </h1>

      {/* DASHBOARD TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Profile Completeness Card */}
        <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xl flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Profile Completeness</h2>

          <div className="relative w-32 h-32">
            <svg className="w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#d1d5db"
                strokeWidth="10"
                fill="none"
              ></circle>

              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#2563eb"
                strokeWidth="10"
                fill="none"
                strokeDasharray="300"
                strokeDashoffset={300 - (300 * completeness) / 100}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              ></circle>
            </svg>

            <p className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-700">
              {completeness}%
            </p>
          </div>
        </div>

        {/* Total Fields Card */}
        <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xl text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-3">Fields Completed</h2>
          <p className="text-4xl font-bold text-green-600">{filledFields}/{totalFields}</p>
        </div>

        {/* Explore Button Card */}
        <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-3">
            Explore Colleges
          </h2>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
           <Link to='/ExploreCollages'> Explore Colleges</Link>
          </button>
        </div>
      </div>

      {/* USER DETAILS GRID */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Your Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userAttributes.map((attr, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition"
          >
            <h2 className="text-gray-500 font-semibold mb-2">{attr.label}</h2>
            <p className="text-xl font-bold text-gray-800">{attr.value}</p>
          </div>
        ))}
      </div>

      {/* LOGOUT SECTION */}
      <div className="mt-10 flex justify-center gap-6">
        <button className="p-3 rounded-lg bg-green-500 text-white px-6 hover:bg-green-600 transition">
         <Link to='/ExploreCollages'> Explore Colleges</Link>
        </button>

        <button
          onClick={handleLogOut}
          className="bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
