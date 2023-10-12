import { useEffect, useState } from 'react';

function Degrees() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/degree/')
      .then(response => response.json())
      .then(data => setDegrees(data));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        <table style={{ margin: 'auto', fontSize: '24px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>Degree Full Name</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Degree Shortcode</th>
            </tr>
          </thead>
          <tbody>
            {degrees.map(degree => (
              <tr key={degree.shortcode} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px', textAlign: 'left' }}>{degree.full_name}</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>{degree.shortcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Degrees;



