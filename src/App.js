import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScreenContact from './features/screencontac/ScreenContac';
import Activities from './features/activities/Activities';
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
import ActivityPage from './features/activityPage/ActivityPage';


import NewsDetail from './features/newsDetail/NewsDetail'
import LoginRouteGuard from './LoginRouteGuard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
        <Route path="/backoffice/activities" element={<Activities />} />
        <Route path="/news" element={<ScreenNews/>} />
        <Route path="/backoffice/users" element={<UsersTable />} />     
        <Route path="/*" element={<MainSPA />} />
        <Route element={<LoginRouteGuard/>}>
          <Route path="/backOffice/*" element={ <BackOffice/> } />
        </Route>
        <Route path="/backoffice/users" element={<UsersTable />} />
        <Route exact path='/backoffice/contacts' element={<ContactsPanel />} />
        <Route path='/news/:id' element={<NewsDetail />} />
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
        <Route path='/actividades/:id' element={<ActivityPage />} />
      </Routes>

      <Footer />

    </div>
    
  );
}


export default App;