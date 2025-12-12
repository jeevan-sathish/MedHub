import React, { useEffect, useState } from "react";

const MedicalColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "579b464db66ec23bdd000001132d39a949174bfc51f0a90119ecf9ba";
  const resourceId = "6ac612b5-039c-4b46-b31f-b2be316bdadb";

  useEffect(() => {
    fetch(
      `https://api.data.gov.in/resource/${resourceId}?api-key=${apiKey}&format=json&limit=100&offset=0`
    )
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.records);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Error loading data!");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Medical Colleges in India</h2>
      <ul className="list-disc pl-6 space-y-2">
       {colleges
  .filter(college => college.seats >= 150)
  .map((college, index) => (
    <li key={index}>
      {college.name_of_the_medical_college_place} ({college.state}) - Seats: {college.seats}
    </li>
  ))}

      </ul>
    </div>
  );
};

export default MedicalColleges;
