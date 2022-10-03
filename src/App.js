import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './features/Footer/Footer';
import Main from './features/mainScreen/Main'
import Login from './features/loginForm/LoginForm'
import Register from './features/registerForm/RegisterForm';
import Contact from './features/screencontac/ScreenContac'

import BackOffice from './features/backOffice/BackOffice';


import { Routes, Route } from 'react-router-dom';
import RegisterForm from './features/registerForm/RegisterForm'
import {useSelector} from 'react-redux'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainSPA />} />
        <Route path="/backOffice/*" element={<BackOffice />} />
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