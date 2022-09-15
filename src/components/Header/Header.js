import './Header.css'
import React, { useState } from 'react'
import { List } from 'react-bootstrap-icons'
import { Link, BrowserRouter } from 'react-router-dom'


export default function Header() {

  const [headerButtons, setHeaderButtons] = useState(['Nosotros', 'Novedades', 'Testimonios', 'Contacto', 'Contribuye'])

  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt='SOMOS MAS' />
      </div>
      <NavBar buttons={headerButtons}/>
      <BurguerIcon buttons={headerButtons}/>
      </div>
  )
}

function NavBar({ buttons }) {
  return (
    <BrowserRouter>
      <nav>
      <Link to='/'><button className='home-button'>Inicio</button></Link>
        {buttons.map(button => <Link to={button}><button key={button}>{button}</button></Link>)}
        <div className='account'>
          <Link to='Login'><button className='login'>Log in</button></Link>
          <Link to='Registrarse'><button className='register'>Registrate</button></Link>
        </div>
      </nav>
    </BrowserRouter>  
  )
}

function BurguerIcon({ buttons }) {

  const [openMenu, setOpenMenu] = useState(false)

  return(
   <div className='burguer-container'>
   <div className='burguer-menu' onClick={() => setOpenMenu(!openMenu)}> 
    <List size={36}/>
   </div>
   {openMenu && <BurguerMenu setOpenMenu={setOpenMenu} buttons={buttons}/>}
   </div>
  )
}

function BurguerMenu({ buttons }) {

  return(
    <BrowserRouter>
    <ul className='burguer-list'>
      <Link to='Login'><li className='burguer-login'>Login</li></Link>
      <Link to='Registrarse'><li className='burguer-register'>Registrate</li></Link>
      {buttons.map(button => <Link to={button}><li key={button} className='burguer-link'>{button}</li></Link>)}
    </ul>
    </BrowserRouter>
  )
}
