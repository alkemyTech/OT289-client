import React from 'react';
import './App.css';
import LoginForm from './features/loginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';
import UsersTable from './features/usersTable/UsersTable';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <LoginForm />
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backoffice/users" element={<UsersTable />} />
      </Routes>
    </div>
    
  );
}

export default App;