import React, { useState, useEffect } from 'react';

const SingleModule = () => {
  const [moduleData, setModuleData] = useState(null);
  const [selectedModuleCode, setSelectedModuleCode] = useState('');

  useEffect(() => {
    const fetchModuleData = async () => {
      if (selectedModuleCode) {
        const response = await fetch(`http://127.0.0.1:8000/api/module/${selectedModuleCode}/`);
        const data = await response.json();
        setModuleData(data);
      }
    };

    fetchModuleData();
  }, [selectedModuleCode]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <div className="bg-white shadow rounded p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">View Module</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Module Code:</label>
          <input
            type="text"
            value={selectedModuleCode}
            onChange={(e) => setSelectedModuleCode(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {moduleData && (
          <>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{moduleData.full_name}</h2>
            <p className="text-gray-700 mb-4">{moduleData.description}</p>
            <ul className="list-disc pl-5">
              <li className="mb-1 text-gray-700">
                Module Code: {moduleData.code}
              </li>
              <li className="mb-1 text-gray-700">
                CA Split: {moduleData.ca_split}
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleModule;
