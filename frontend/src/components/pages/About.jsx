import React, { memo } from "react";
import MedicalColleges from "../Elements/MedicalColleges";

const About = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <MedicalColleges />
    </div>
  );
};

export default memo(About);
