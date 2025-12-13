import React, { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import { ThreeDots } from "react-loader-spinner";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ExploreCollages = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const apiKey = "579b464db66ec23bdd000001132d39a949174bfc51f0a90119ecf9ba";
  const resourceId = "6ac612b5-039c-4b46-b31f-b2be316bdadb";

  // Fetch Colleges
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.data.gov.in/resource/${resourceId}?api-key=${apiKey}&format=json&limit=300`
    );
    const data = await res.json();
    setColleges(data.records || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredColleges = colleges.filter(
    (c) =>
      c.name_of_the_medical_college_place
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      c.state.toLowerCase().includes(search.toLowerCase())
  );

  // Gemini Analysis
  const analyseCollege = async (college) => {
    setSelected(college);
    setAiLoading(true);
    setResponse("");

    const genAI = new GoogleGenerativeAI(
      "API_KEY"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
Give a clean, well-formatted analysis with headings:

College Name: ${college.name_of_the_medical_college_place}
State: ${college.state}
Seats: ${college.seats}

Include:
- Overview
- Seat Analysis
- Admission Reputation
- Official Website Link (if available)
`;

    const result = await model.generateContent(prompt);
    setResponse(result.response.text());
    setAiLoading(false);
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <ThreeDots height="80" width="80" />
      </div>
    );

  return (
    <div className="w-full min-h-screen bg-blue-50 p-4 flex flex-col lg:flex-row gap-4">
      
      {/* LEFT PANEL */}
      <div className="w-full lg:w-[65%] bg-white rounded-xl shadow p-4">
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded-xl px-4 h-10"
            placeholder="Search college or state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={fetchData}>
            <IoMdRefresh size={22} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-600 text-white sticky top-0">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">College</th>
                <th className="p-2">State</th>
                <th className="p-2">Seats</th>
              </tr>
            </thead>
            <tbody>
              {filteredColleges.map((c, i) => (
                <tr
                  key={i}
                  onClick={() => analyseCollege(c)}
                  className="border-b hover:bg-blue-50 cursor-pointer"
                >
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2 font-semibold">
                    {c.name_of_the_medical_college_place}
                  </td>
                  <td className="p-2">{c.state}</td>
                  <td
                    className={`p-2 font-bold ${
                      c.seats >= 150 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {c.seats}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-[35%] bg-white rounded-xl shadow p-4">
        {!selected && (
          <p className="text-gray-400 text-center">
            Select a college to view analysis, <br />
            <span className="text-red-500">currently api key limit 0 view your billing</span>
          </p>
        )}

        {aiLoading && (
          <div className="flex justify-center">
            <ThreeDots height="50" width="50" />
          </div>
        )}

        {response && (
          <div className="space-y-4 text-sm leading-relaxed">
            {response.split("\n").map((line, i) => (
              <p key={i} className="whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCollages;
