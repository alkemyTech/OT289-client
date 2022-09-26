import React from 'react';
import './App.css';
//import EditForm from './features/editForm/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode'

import ScreenContact from './features/screencontac/ScreenContac';

import { Routes, Route } from 'react-router-dom';

function App() {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImZhZGFzZGFkYXNkSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGVJZCI6Mn0.btTzRLfmCJycJ8tgi4kzs965XHe6trFEtwmefnguLPQ'
  localStorage.setItem('token', token)
  const lsToken = localStorage.getItem('token')
  console.log()
  const decodedToken = jwtDecode(lsToken) // Si cambias el signature del token igualmente obtenes los datos del payload!, para preguntar el lunes

  console.log(decodedToken)

  return (
    <div className="App">
      
      <Routes>
        <Route path="/contac" element={<ScreenContact />} />
      </Routes>
    </div>
  );
}

export default App;