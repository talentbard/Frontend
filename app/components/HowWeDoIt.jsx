import React from "react";
import { FaChartLine, FaCode, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "A Career Page That Converts",
    desc: "75% of talent thoroughly research companies before applying. We provide comprehensive information to help you make informed decisions.",
  },
  {
    icon: <FaCode />,
    title: "Showcase Real Startup Impact",
    desc: "Work on innovative projects using cutting-edge technologies. Make a real impact while building your portfolio.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Relationships",
    desc: "Build lasting partnerships with forward-thinking startups. Join our reliable talent pool for consistent opportunities.",
  },
];

const HowWeDoIt = () => {
  return (
    <div>
    <div className="bg-gray-200 rounded-lg py-20 shadow-sm">
      
      <h2 className="text-4xl font-bold text-center mb-8">How We Do It?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-sm">
            <div className="text-4xl text-black mb-4 flex justify-center">{feature.icon}</div>
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
      </div>
     
    
    </div>
  );
};

export default HowWeDoIt;
