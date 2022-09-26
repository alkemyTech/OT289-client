import React from 'react';
import './App.css';
import EditForm from './components/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <EditForm />
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
      </Routes>
    </div>
  );
}

export default App;