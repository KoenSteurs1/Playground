import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Placeholder from '../components/Placeholder.jsx';
import Berekening from '../components/Berekening.jsx'; // 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Placeholder />}  />
          <Route path="/berekening" element={<Berekening />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
