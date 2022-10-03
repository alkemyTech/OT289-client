import React from 'react';
import './App.css';
import EditForm from './features/editForm/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';
import UsersTable from './features/usersTable/UsersTable';

import { Routes, Route } from 'react-router-dom';
import ContactsPanel from './features/backOffice/partials/ContactsPanel';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backoffice/users" element={<UsersTable />} />
        <Route exact path='/backoffice/contacts' element={<ContactsPanel />} />
      </Routes>
    </div>
    
  );
}

export default App;