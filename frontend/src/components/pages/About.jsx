import React, { memo } from "react";

import { Search, Brain, CheckCircle } from "lucide-react";


const About = () => {
  return (
    <div className="w-full min-h-screen bg-blue-50 px-4 py-12">
     
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Smart Guide to Government Medical Colleges 🏥
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore verified <strong>government medical colleges</strong>, seat
          availability, and let our <strong>AI-powered agent</strong> analyze
          everything for you — so you can confidently decide your future.
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <FeatureCard
          icon={<Search size={28} />}
          title="Search Any College"
          desc="Quickly search government medical colleges by name, state, or quota with real seat data."
        />

        <FeatureCard
          icon={<Brain size={28} />}
          title="One-Click AI Analysis"
          desc="Our AI agent analyzes seats, cutoff trends, location, facilities, and academics instantly."
        />

        <FeatureCard
          icon={<CheckCircle size={28} />}
          title="Make Better Decisions"
          desc="Know whether a college is worth exploring further before spending time and effort."
        />
      </div>

    
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Explore Government Medical Colleges
        </h2>
        <p className="text-gray-600 mb-6">
          Search colleges below and click on <strong>AI Analyze</strong> to get a
          complete overview including seats, admission chances, and pros & cons.
        </p>

        
      </div>
      
    </div>
  );
};


const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-blue-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default memo(About);
