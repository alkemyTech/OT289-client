import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackOffice from './features/backOffice/BackOffice';
import NewsPanel from './features/backOffice/partials/NewsPanel'

import ScreenContact from './features/screencontac/ScreenContac';
import UsersTable from './features/usersTable/UsersTable';

import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backOffice/*" element={<BackOffice />} />
        <Route exact path='/backoffice/news' element={<NewsPanel />} />
        <Route path="/backoffice/users" element={<UsersTable />} />
      </Routes>
    </div>
    
  );
}

export default App;