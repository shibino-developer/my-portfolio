import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutDetails from './pages/AboutDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/AboutDetails" element={<AboutDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
