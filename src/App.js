import React from 'react';
import './App.css';
import EditForm from './features/editForm/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';
import Activities from './features/activities/Activities';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <EditForm />
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backoffice/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;