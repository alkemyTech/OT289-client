import './Header.css'
import React, { useState } from 'react'
import { List, X  } from 'react-bootstrap-icons'
import { Link, BrowserRouter } from 'react-router-dom'
import { headerLinks }  from '../../data/headerLinks'


export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt='SOMOS MAS' />
      </div>
      <NavBar />
      <BurguerIcon />
      </div>
  )
}

function NavBar() {
  return (

      <nav>
      <Link to='/'><button className='home-button'>Inicio</button></Link>
        {headerLinks.map(button => <Link to={button}><button key={button}>{button}</button></Link>)}
        <div className='account'>
          <Link to='Login'><button className='login'>Log in</button></Link>
          <Link to='Registrarse'><button className='register'>Registrate</button></Link>
        </div>
      </nav>

  )
}

function BurguerIcon() {

  const [openMenu, setOpenMenu] = useState(false)

  return(
   <div className='burguer-container'>
   <div className='burguer-menu' onClick={() => setOpenMenu(!openMenu)}> 
    {!openMenu ? <List size={36}/> : <X size={36}/>}
   </div>
   {openMenu && <BurguerMenu setOpenMenu={setOpenMenu}/>}
   </div>
  )
}

function BurguerMenu() {

  return(

    <ul className='burguer-list'>
      <Link to='Login'><li className='burguer-login'>Login</li></Link>
      <Link to='Registrarse'><li className='burguer-register'>Registrate</li></Link>
      {headerLinks.map(button => <Link to={button}><li key={button} className='burguer-link'>{button}</li></Link>)}
    </ul>

  )
}
