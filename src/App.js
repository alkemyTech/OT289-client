import React from 'react';
import './App.css';
//import EditForm from './features/editForm/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreenContact from './features/screencontac/ScreenContac';
import { Routes, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {login, logout, refresh} from './features/user/userSlice'


function App() {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiZ3Vlc3QiLCJlbWFpbCI6Imd1ZXN0QGdtYWlsLmNvbSJ9.-YkrY52fBf0X7SksxYmneGp2jzY8kyIT6euGCVWcdNo'
  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()

  dispatch(refresh())
  
  const handleLogin = () => {
    localStorage.setItem('token', token)
    dispatch(login(token))
  }

  const handleLogout = () => {
    localStorage.clear('token')
    dispatch(logout())
  }

  return (  
    <div className="App">
      <h1>el id del usuario actual es</h1>
      <h3>{userState.id}</h3>
      <h1>y el email del usuario actual es</h1>
      <h3>{userState.email}</h3>
      <h1>Y su token es</h1>
      <h3>{userState.token}</h3>
      <button onClick={() => handleLogin()}>boton login</button>
      <button onClick={() => handleLogout()}>boton logout</button>
      
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
      </Routes>
    </div>  
  );
}

export default App;