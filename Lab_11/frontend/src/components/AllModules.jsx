import { useEffect, useState } from "react";

function AllModules() {
  const [modules, setModules] = useState([]);

  console.log("AllModules");

  useEffect(() => {
    // Fetch all modules from the API
    fetch(`http://127.0.0.1:8000/api/module/`)
      .then((response) => response.json())
      .then((data) => setModules(data))
      .catch((error) => console.log(error));
  }, []);

  const renderModuleList = () => {
    return modules.map((module) => (
      <li key={module.code}>
        {module.full_name}
      </li>
    ));
  };
  

  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "2rem"}}>
        All Modules
      </h1>
      <ul style={{listStyle: "none", padding: 0}}>
        {renderModuleList()}
      </ul>
    </div>
  );
}

export default AllModules;
