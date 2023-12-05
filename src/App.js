import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftComponent from './comp/L_Page/LeftComponent';
import RightComponent from './comp/R_Page/RightComponent';
import Introduction from './comp/Introduction/Introduction.js';
import Project from './comp/Project/Project.js';
import Contest from './comp/Contest/Contest.js';
import Carrer from './comp/Carrer/Carrer.js';


function App() {

  return (
    <Router>
      <div className="app-container">
        <LeftComponent />
        <Routes>
          <Route path="/" element={<RightComponent />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contest" element={<Contest />} />
          <Route path="/Carrer" element={<Carrer />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;