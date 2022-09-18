import React from 'react';
import './App.css';
import ScreenContact from './features/screencontac/ScreenContac';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contac" element={<ScreenContact />} />
      </Routes>
    </div>
  );
}

export default App;