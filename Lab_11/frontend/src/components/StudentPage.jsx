import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentPage(props) {
  console.log("Rendering StudentPage component");
  const [student, setStudent] = useState({});
  const [grades, setGrades] = useState([]);
  const [modules, setModules] = useState([]);
  const [searchID, setSearchID] = useState("");

  useEffect(() => {
    if (searchID) {
      // Retrieve the student information
      axios
        .get(`http://localhost:8000/api/student/${searchID}/`)
        .then((response) => {
          setStudent(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // Retrieve the student's grades
      axios
        .get(`http://localhost:8000/api/grade/?student=${searchID}`)
        .then((response) => {
          console.log(response.data)
          setGrades(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      
      axios
        .get(`http://localhost:8000/api/module/?student=${searchID}`)
        .then((response) => {
          console.log(response.data)
          setModules(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchID]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchID(e.target.searchID.value);
  };
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search for a Student</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchID">Enter Student ID:</label>
        <input type="text" id="searchID" name="searchID" />
        <button type="submit">Search</button>
      </form>

      {student && Object.keys(student).length > 0 && grades && grades.length > 0 && (
        <div>
          <h1>{student.first_name} {student.last_name}</h1>
          <p>Email: {student.email}</p>
          <table style={{ margin: "auto" }}>
            <thead>
              <tr>
                <th>Module Grade</th>
              </tr>
            </thead>
            <tbody>
              
            {grades.map((data) => (
              <div key={data.id}>
                <p>Student Final Grade: {data.total_grade}</p>
              </div>
            ))}
            </tbody>
          </table>
          <table style={{ margin: "auto" }}>
            <thead>
              <tr>
                <th>Module Name</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((data) => (
                <div key={data.code}>
                  <p>Module Code: {data.code}</p>
                  <p>Module Name: {data.full_name}</p>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentPage;

