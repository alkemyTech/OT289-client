import React from 'react';
import './App.css';

import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Slider from './components/editForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/editForm" element={<Slider />} />
      </Routes>
    </div>
  );
}

export default App;
