import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateDegree from './components/CreateDegree';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Degrees from './components/AllDegrees';
import SingleDegree from './components/SingleDegree';
import CohortsPage from './components/CohortsPage';
import SingleCohort from './components/SingleCohort';
import CreateCohort from './components/CreateCohort';
import AllModules from './components/AllModules';
import SingleModule from './components/SingleModule';
import CohortModules from './components/CohortModules';
import CreateModule from './components/CreateModule';
import StudentPage from './components/StudentPage';
import CreateStudent from './components/CreateStudent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/CreateDegree" element={<CreateDegree />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/SingleDegree" element={<SingleDegree />} />
          <Route path="/CohortsPage" element={<CohortsPage />} />
          <Route path="/SingleCohort" element={<SingleCohort />} />
          <Route path="/CreateCohort" element={<CreateCohort />} />
          <Route path="/AllModules" element={<AllModules />} />
          <Route path="/SingleModules" element={<SingleModule />} />
          <Route path="/CohortModules" element={<CohortModules />} />
          <Route path="/CreateModule" element={<CreateModule />} />
          <Route path="/StudentPage" element={<StudentPage />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;