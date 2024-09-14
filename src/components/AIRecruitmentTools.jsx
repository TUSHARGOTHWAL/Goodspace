import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const aiTools = [
  {
    id: 'finder',
    title: 'AI Finder',
    description: 'AI Shortlister leverages advanced analytics to accurately evaluate candidates against 50+ parameters, ensuring only the most qualified applicants are prioritized for further consideration..',
    image: 'src/assets/aifinder-a6d4c2e4.png', 
  },
  {
    id: 'shortlister',
    title: 'AI Shortlister',
    description: 'AI Shortlister leverages advanced analytics to accurately evaluate candidates against 50+ parameters, ensuring only the most qualified applicants are prioritized for further consideration.',
    image: 'src/assets/aishortlister-95a8c22a.png',
  },
  {
    id: 'interviewer',
    title: 'AI Interviewer',
    description: 'AI Interviewer conducts live video interviews with shortlisted candidates, delving into their suitability, motivation, and enthusiasm for the position; identifying candidates who are not only qualified but genuinely interested in the role.',
    image: 'src/assets/aiinterviewer-7de0e98a.png',
  },
  {
    id: 'evaluator',
    title: 'AI Evaluator',
    description: 'AI Evaluator integrates all feedback collected so far to evaluate them based on a thorough understanding of their capabilities and fit; streamlining hiring end-to-end and ensuring only the highest quality hires.',
    image: 'src/assets/aievaluator-91b1e8c1.png',
  },
];

const AIRecruitmentTools = () => {
  const [selectedTool, setSelectedTool] = useState('interviewer');

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20 mb-36">
      <h1 className="text-4xl font-bold text-center mb-20">
        Why companies across India are choosing <br />
        <span className="text-blue-500"> GoodSpace</span>
      </h1>
      
      <div className="flex justify-between mb-8 gap-2">
        {aiTools.map((tool) => (
          <button
            key={tool.id}
            className={`px-4 py-2 font-medium ${
              selectedTool === tool.id
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedTool(tool.id)}
          >
            {tool.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          {aiTools.map((tool) =>
            selectedTool === tool.id ? (
              <div key={tool.id}>
                <h2 className="text-6xl font-bold text-blue-600 mb-4">{tool.title}</h2>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md flex items-center">
                  Start hiring
                  <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            ) : null
          )}
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-72">
          {aiTools.map((tool) =>
            selectedTool === tool.id ? (
              <img
                key={tool.id}
                src={tool.image}
                alt={tool.title}
                className="min-w-3 h-96 rounded-lg shadow-lg"
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default AIRecruitmentTools;
