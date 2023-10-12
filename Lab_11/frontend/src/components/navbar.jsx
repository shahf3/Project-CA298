import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    height: '60px',
  };

  const ulStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    margin: '0 10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
        </li>
        <li style={liStyle}>
          <Link to="/degrees" style={linkStyle}>Degrees</Link>
        </li>
        <li style={liStyle}>
          <Link to="/SingleDegree" style={linkStyle}>Single Degree</Link>
        </li>
        <li style={liStyle}>
          <Link to="/CreateDegree" style={linkStyle}>New Degree</Link>
        </li>
        <li style={liStyle}>
          <Link to="/CohortsPage" style={linkStyle}>All Cohorts</Link>
        </li>
        <li style={liStyle}>
          <Link to="/SingleCohort" style={linkStyle}>Single Cohort</Link>
        </li>
        <li style={liStyle}>
          <Link to="/CreateCohort" style={linkStyle}>Create a Cohort</Link>
        </li>
        <li style={liStyle}>
          <Link to="/AllModules" style={linkStyle}>View All Modules</Link>
        </li>
        <li style={liStyle}>
          <Link to="/SingleModules" style={linkStyle}>View Single Module</Link>
        </li>
        <li style={liStyle}>
          <Link to="/CohortModules" style={linkStyle}>View Cohort by Module</Link>
        </li>
        <li style={liStyle}>
          <Link to="/CreateModule" style={linkStyle}>Create A Module</Link>
        </li>
        <li style={liStyle}>
          <Link to="/StudentPage" style={linkStyle}>Student</Link>
        </li>
        <li style={liStyle}>
          <Link to="/CreateStudent" style={linkStyle}>Create a Student</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
