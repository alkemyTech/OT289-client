import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import ScreenContact from './features/screencontac/ScreenContac';
import Activities from './features/activities/Activities';
import ScreenNews from './features/screenNews/ScreenNews';
import UsersTable from './features/usersTable/UsersTable';
import Main from './features/mainScreen/Main'
import Login from './features/loginForm/LoginForm'
import Register from './features/registerForm/RegisterForm';
import Contact from './features/screencontac/ScreenContac'
import ActivityMain from './features/activityMain/ActivityMain'

import BackOffice from './features/backOffice/BackOffice';


import { Routes, Route, useLocation } from 'react-router-dom';
import ContactsPanel from './features/backOffice/partials/ContactsPanel';
import ActivityPage from './features/activityPage/ActivityPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/* import UsersTable from './features/usersTable/UsersTable' */



import NewsDetail from './features/newsDetail/NewsDetail'
import LoginRouteGuard from './LoginRouteGuard';
import NewsPanel from './features/backOffice/partials/NewsPanel'

import Layout from './components/Layout/Layout';

import Nosotros from './features/nosotros/Nosotros';

function App() {
  const location = useLocation();
  return (

    <div className="App">    
      
      <TransitionGroup component={null}>
      
      <CSSTransition
      key={location.key}
      timeout={750}
      classNames="fade"
      >       
      <Routes location={location}>
        <Route path="/contac" element={<ScreenContact />} />    
        <Route path="/backoffice/activities" element={<Activities />} />
        <Route path="/backoffice/users" element={<UsersTable />} />     
        <Route path="/*" element={<MainSPA />} />
        <Route element={<LoginRouteGuard/>}>
          <Route path="/backOffice/*" element={ <BackOffice/> } />
        </Route>
        <Route path="/backoffice/users" element={<UsersTable />} />
        <Route exact path='/backoffice/contacts' element={<ContactsPanel />} />
        <Route path='/backoffice/newspanel' element={<NewsPanel/>} />
      </Routes>
      
      </CSSTransition>
      
      </TransitionGroup>      
     
    </div>
    
  );
}

function MainSPA() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<Nosotros/>} />        
        <Route exact path='/actividades' element={<ActivityMain />} />
        <Route exact path='/actividades/:id' element={<ActivityPage />} />
        <Route path="/novedades" element={<ScreenNews />} />
        <Route path="/novedades/:id" element={<NewsDetail />} />
      </Routes>
    </Layout>
  );
}


export default App;