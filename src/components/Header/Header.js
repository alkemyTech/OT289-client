import './Header.css'
import React, { useState } from 'react'
import { List, X  } from 'react-bootstrap-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { headerLinks }  from '../../data/headerLinks'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/user/userSlice'




export default function Header() {

  const userData = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to='/'><img src="/images/logo.png" alt='SOMOS MAS' /></Link>
        </div>
        <NavBar />
        <div className='account'>
          {userData.id ? /*AGREGAR DESPUES MANERA DE EDITAR USUARIO*/null : <Link to='Login'><button className='login'>Log in</button></Link>}
          {userData.id ? <button className='register' onClick={handleLogout}>Cerrar Sesion</button> : <Link to='Registrarse'><button className='register'>Registrate</button></Link> }
        </div>
        <BurguerIcon userData={userData} handleLogout={handleLogout}/>
      </div>
      <div className='hidden'></div>
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

function BurguerIcon({ userData, handleLogout }) {

  const [openMenu, setOpenMenu] = useState(false)

  return(
   <div className='burguer-container'>
   <div className='burguer-menu' onClick={() => setOpenMenu(!openMenu)}> 
    {!openMenu ? <List size={36}/> : <X size={36}/>}
   </div>
   {openMenu && <BurguerMenu setOpenMenu={setOpenMenu} openMenu={openMenu} userData={userData} handleLogout={handleLogout}/>}
   </div>
  )
}

function BurguerMenu({ setOpenMenu, openMenu, userData, handleLogout }) {

  console.log(userData)
  let location = useLocation()

  return(

    <ul className='burguer-list'>
      {userData.id ? /*ARMAR EDICION DE PERFIL*/null : <Link to='Login'><li className='burguer-login' onClick={() => setOpenMenu(!openMenu)}>Login</li></Link>}
      {userData.id ? <li className='burguer-register' onClick={handleLogout}>Cerrar sesion</li> : <Link to='Registrarse'><li className='burguer-register' onClick={() => setOpenMenu(!openMenu)}>Registrate</li></Link>}
      {headerLinks.map(button => <Link to={button.link} key={button.link}><li key={button.link} className={`${location.pathname === button.link ? 'active' : '' }`} onClick={() => setOpenMenu(!openMenu)}>{button.name}</li></Link>)}
    </ul>

  )
}
