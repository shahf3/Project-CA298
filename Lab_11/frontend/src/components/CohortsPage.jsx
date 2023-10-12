import React, { useState, useEffect } from 'react';

function CohortsPage() {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cohort/')
      .then(response => response.json())
      .then(data => setCohorts(data));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '2px solid black', padding: '30px', width: '50%' }}>
        <h1 style={{ textAlign: 'center', margin: 0 }}>All Cohorts</h1>
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', padding: '10px' }}>ID</th>
              <th style={{ textAlign: 'center', padding: '10px' }}>Name</th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map(cohort => (
              <tr key={cohort.id}>
                <td style={{ textAlign: 'center', padding: '10px' }}>{cohort.id}</td>
                <td style={{ textAlign: 'center', padding: '10px' }}>{cohort.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CohortsPage;

