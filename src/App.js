import React from 'react';
import './App.css';
import EditForm from './features/editForm/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';
import ScreenNews from './features/screenNews/screenNews';
import UsersTable from './features/usersTable/UsersTable';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {  <EditForm /> }
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/news" element={<ScreenNews/>} />
        <Route path="/backoffice/users" element={<UsersTable />} />
      </Routes>
    </div>
    
  );
}

export default App;