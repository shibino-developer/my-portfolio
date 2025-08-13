import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutDetails from './pages/AboutDetails';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import Footer

function App() {
  return (
    <Router>
      {/* ✅ Navbar on top */}
      <Navbar />

      {/* ✅ Main Content */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutDetails" element={<AboutDetails />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
