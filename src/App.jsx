import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add other pages here later, e.g. <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}

export default App;
