import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutDetails from './pages/AboutDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutDetails" element={<AboutDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
