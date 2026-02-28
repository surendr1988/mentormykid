import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Learn from './pages/Learn';
import Discover from './pages/Discover';
import Careers from './pages/Careers';
import Food from './pages/Food';
import Parents from './pages/Parents';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/food" element={<Food />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
