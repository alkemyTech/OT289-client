import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackOffice from './features/backOffice/BackOffice';

import ScreenContact from './features/screencontac/ScreenContac';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backOffice/*" element={<BackOffice />} />
      </Routes>
    </div>
  );
}

export default App;