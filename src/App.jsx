import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Output from './components/Output';

function App() {
  return (
    <Router basename="/QuickLearn">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/output/:videoId" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;
