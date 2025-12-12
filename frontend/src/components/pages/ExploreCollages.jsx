import React, { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import {ThreeDots} from 'react-loader-spinner'

const ExploreCollages = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const apiKey = "579b464db66ec23bdd000001132d39a949174bfc51f0a90119ecf9ba";
  const resourceId = "6ac612b5-039c-4b46-b31f-b2be316bdadb";

  function fetchdata(){
    fetch(
      `https://api.data.gov.in/resource/${resourceId}?api-key=${apiKey}&format=json&limit=300`
    )
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.records || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Error loading data!");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchdata()
    
  }, []);

  if (loading) return <ThreeDots
                                visible={true}
                                height="80"
                                width="80"
                                color="#4fa94d"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
/>;
  if (error) return <p>{error}</p>;


  const filteredColleges = colleges.filter((col) =>
    col.name_of_the_medical_college_place
      .toLowerCase()
      .includes(search.toLowerCase()) || col.state.toLowerCase().includes(search.toLowerCase())
  );

  function handleRefresh(){
    fetchdata();
  }

  return (
    <div className="w-full min-h-screen flex gap-4 bg-blue-50 p-4">
    
      <div className="w-[65%] border-r border-gray-400 pr-4">
        <nav className="w-full h-[55px] gap-2.5 bg-white shadow-md rounded-xl flex items-center px-4">
          <input
            type="text"
            placeholder="Search your colleges..."
            className="w-[70%] h-[40px] px-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
          onClick={handleRefresh}
          className="p-2 " >
          <IoMdRefresh className="font-extrabold text-[20px] hover:text-[25px]"/>
          </button>
        </nav>

        {/* PROFESSIONAL TABLE */}
        <div className="mt-6 overflow-y-auto max-h-[80vh] rounded-xl shadow-lg">
          <table className="w-full border-collapse text-left">
            <thead className="bg-blue-600 text-white sticky top-0">
              <tr>
                <th className="py-3 px-4">SL No</th>
                <th className="py-3 px-4">College Name</th>
                <th className="py-3 px-4">State</th>
                <th className="py-3 px-4">Seats</th>
              </tr>
            </thead>

            <tbody>
              {filteredColleges.map((ele, i) => (
                <tr key={i} className="border-b hover:bg-blue-50 transition">
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4 font-semibold">
                    {ele.name_of_the_medical_college_place}
                  </td>
                  <td className="py-3 px-4">{ele.state}</td>
                  <td className={`py-3 px-4 ${ele.seats>=150?"text-green-500 font-bold":"text-red-500 font-bold"}`}>{ele.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[35%] p-4"></div>
    </div>
  );
};

export default ExploreCollages;
