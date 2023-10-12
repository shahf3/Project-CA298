import React, { useState } from 'react';

function CreateDegree() {
  const [degree, setDegree] = useState({ shortcode: '', full_name: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDegree(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/degree/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(degree)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setDegree({ shortcode: '', full_name: '' });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
      <h1>Create New Degree</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
          <label htmlFor="shortcode" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Shortcode:</label>
          <input type="text" name="shortcode" id="shortcode" value={degree.shortcode} onChange={handleInputChange} style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
          <label htmlFor="full_name" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Full Name:</label>
          <input type="text" name="full_name" id="full_name" value={degree.full_name} onChange={handleInputChange} style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
        </div>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default CreateDegree;
  