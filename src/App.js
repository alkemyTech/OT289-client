import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
  const slides = [
    { url: "https://images.unsplash.com/photo-1661983228910-eb340412e0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", title: "Guy Computer" },
    { url: "https://images.unsplash.com/photo-1662047919286-19175909fbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", title: "Mountain" },
    { url: "https://images.unsplash.com/photo-1662100112119-09f64f7c288e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80", title: "Freeway" }
  ];
 
  return (
    <div className="App">
        <ImageSlider slides={slides} />
    </div>
  );
}

export default App;
