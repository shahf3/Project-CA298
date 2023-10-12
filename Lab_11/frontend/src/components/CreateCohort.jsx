import React, { useState } from 'react';

function CreateCohort() {
  const [cohort, setCohort] = useState({ id: '', year: '', degree: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCohort(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/cohort/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: cohort.id, year: parseInt(cohort.year), degree: `http://127.0.0.1:8000/api/degree/${cohort.degree}/` })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setCohort({ id: '', year: '', degree: '' });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
      <h1>Create New Cohort</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
          <label htmlFor="id" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>ID:</label>
          <input type="text" name="id" id="id" value={cohort.id} onChange={handleInputChange} style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
          <label htmlFor="year" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Year:</label>
          <input type="number" name="year" id="year" value={cohort.year} onChange={handleInputChange} step="1" style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
          <label htmlFor="degree" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Degree:</label>
          <input type="text" name="degree" id="degree" value={cohort.degree} onChange={handleInputChange} style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
        </div>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default CreateCohort;
