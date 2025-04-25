import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Platforms from './pages/Platforms';
import PartnerFinder from './pages/PartnerFinder';
import Reviews from './pages/Reviews';
import Guide from './pages/Guide';
import Estimate from './pages/Estimate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/partner-finder" element={<PartnerFinder />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/estimate" element={<Estimate />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 