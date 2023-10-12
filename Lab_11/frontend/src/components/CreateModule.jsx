import React, { useState } from 'react';


function CreateModule() {
  const [module, setModule] = useState({ code: '', full_name: '', delivered_to: [], ca_split: 0 });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setModule(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/module/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: module.code, full_name: module.full_name, delivered_to: [`http://127.0.0.1:8000/api/module/${module.delivered_to}`], ca_split: parseInt(module.ca_split) })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setModule({ code: '', full_name: '', delivered_to: [], ca_split: 0 });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Create New Module</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="code">Code:</label>
          <input type="text" name="code" id="code" value={module.code} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" name="full_name" id="full_name" value={module.full_name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="delivered_to">Delivered To:</label>
          <input type="text" name="delivered_to" id="delivered_to" value={module.delivered_to} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="ca_split">CA Split:</label>
          <input type="number" name="ca_split" id="ca_split" value={module.ca_split} onChange={handleInputChange} step="0.01" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default CreateModule;