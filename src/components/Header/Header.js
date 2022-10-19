import './Header.css'
import React, { useState } from 'react'
import { List, X  } from 'react-bootstrap-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { headerLinks }  from '../../data/headerLinks'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/user/userSlice'
import {BASE_PATH} from '../../utils/constants'
import {customFetch} from '../../services/fetch'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const userData = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    navigate('/')
  }


  const handleDelete = () => {
    const url = `${BASE_PATH}/users/${userData.id}`
    const properties = {
      method: 'delete'
    }
    customFetch(url, properties)
      .then(data => {
        toast.success( data.data , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
        dispatch(logout())
        localStorage.removeItem('token')
        navigate('/')
      })
      .catch(error => {
        toast.error(error.message , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
      })
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to='/'><img src="/images/logo.png" alt='SOMOS MAS' /></Link>
        </div>
        <NavBar />
        <div className='account'>
          {userData.id ? <button className='register' onClick={handleDelete}>Eliminar cuenta</button> : null}
          {userData.role === 1 ? <Link to='backoffice'><button className='login'>Backoffice</button></Link> : null}
          {userData.id ? /*AGREGAR DESPUES MANERA DE EDITAR USUARIO*/null : <Link to='Login'><button className='login'>Log in</button></Link>}
          {userData.id ? <button className='register' onClick={handleLogout}>Cerrar Sesion</button> : <Link to='Registrarse'><button className='register'>Registrate</button></Link> }
        </div>
        <BurguerIcon userData={userData} handleLogout={handleLogout} handleDelete={handleDelete}/>
      </div>
      <div className='hidden'></div>
      <ToastContainer/>
    </>
  )
}

function NavBar() {

  let location = useLocation()

  return (

      <nav>
        {headerLinks.map(button => <Link to={button.link} key={button.link}><button key={button.link} className={`${location.pathname === button.link ? 'active' : '' }`}>{button.name}</button></Link> )}
      </nav>

  )
}

function BurguerIcon({ userData, handleLogout, handleDelete }) {

  const [openMenu, setOpenMenu] = useState(false)

  return(
   <div className='burguer-container'>
   <div className='burguer-menu' onClick={() => setOpenMenu(!openMenu)}> 
    {!openMenu ? <List size={36}/> : <X size={36}/>}
   </div>
   {openMenu && <BurguerMenu setOpenMenu={setOpenMenu} openMenu={openMenu} userData={userData} handleLogout={handleLogout} handleDelete={handleDelete}/>}
   </div>
  )
}

function BurguerMenu({ setOpenMenu, openMenu, userData, handleLogout, handleDelete }) {

  console.log(userData)
  let location = useLocation()

  return(

    <ul className='burguer-list'>
      {userData.id ? <li className='burguer-register' onClick={handleDelete}>Eliminar perfil</li> : null}
      {userData.id ? /*ARMAR EDICION DE PERFIL*/null : <Link to='Login'><li className='burguer-login' onClick={() => setOpenMenu(!openMenu)}>Login</li></Link>}
      {userData.id ? <li className='burguer-register' onClick={handleLogout}>Cerrar sesion</li> : <Link to='Registrarse'><li className='burguer-register' onClick={() => setOpenMenu(!openMenu)}>Registrate</li></Link>}
      {headerLinks.map(button => <Link to={button.link} key={button.link}><li key={button.link} className={`${location.pathname === button.link ? 'active' : '' }`} onClick={() => setOpenMenu(!openMenu)}>{button.name}</li></Link>)}
    </ul>

  )
}
