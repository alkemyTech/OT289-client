import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';
import ScreenNews from './features/screenNews/screenNews';
import UsersTable from './features/usersTable/UsersTable';
import Header from './components/Header/Header';
import Footer from './features/Footer/Footer';
import Main from './features/mainScreen/Main'
import Login from './features/loginForm/LoginForm'
import Register from './features/registerForm/RegisterForm';
import Contact from './features/screencontac/ScreenContac'

import BackOffice from './features/backOffice/BackOffice';


import { Routes, Route } from 'react-router-dom';
import ContactsPanel from './features/backOffice/partials/ContactsPanel';
import RegisterForm from './features/registerForm/RegisterForm'
import {useSelector} from 'react-redux'
import UsersTable from './features/usersTable/UsersTable'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/news" element={<ScreenNews/>} />
        <Route path="/backoffice/users" element={<UsersTable />} />     
        <Route path="/*" element={<MainSPA />} />
        <Route path="/backOffice/*" element={<BackOffice />} />
        <Route path="/backoffice/users" element={<UsersTable />} />
        <Route exact path='/backoffice/contacts' element={<ContactsPanel />} />
      </Routes>
    </div>
    
  );
}

function MainSPA() {

  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
    
  );
}


export default App;