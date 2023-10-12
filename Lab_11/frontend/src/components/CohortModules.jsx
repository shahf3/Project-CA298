import React, { useState, useEffect } from 'react';

const CohortModules = () => {
  const [moduleData, setModuleData] = useState(null);
  const [selectedCohortName, setSelectedCohortName] = useState(''); 
  useEffect(() => {
    const fetchModuleData = async () => {
      if (selectedCohortName ) {
        const response = await fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${selectedCohortName}`);

        const data = await response.json();
        setModuleData(data);
      }
    };

    fetchModuleData();
  }, [selectedCohortName]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <div className="bg-white shadow rounded p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">View Modules by Cohort</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Cohort Name:</label>
          <input
            type="text"
            value={selectedCohortName}
            onChange={(e) => setSelectedCohortName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {moduleData && moduleData.length > 0 ? (
          <ul>
            {moduleData.map((module) => (
              <li key={module.code}>{module.full_name}</li>
            ))}
          </ul>
        ) : (
          <p>No modules found for the selected cohort.</p>
        )}
      </div>
    </div>
  );
};

export default CohortModules;
