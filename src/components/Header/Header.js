import './Header.css'
import React, { useState } from 'react'
import { List, X  } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { headerLinks }  from '../../data/headerLinks'


export default function Header() {

  return (
    <>
    <div className="header">
      <div className="logo">
      <Link to='/'><img src="/images/logo.png" alt='SOMOS MAS' /></Link>
      </div>
      <NavBar />
      <BurguerIcon />
      </div>
      <div className='hidden'></div>
      </>
  )
}

function NavBar() {
  return (

      <nav>
        {headerLinks.map(button => <Link to={button.link} key={button.link}><button key={button.link}>{button.name}</button></Link> )}
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
   {openMenu && <BurguerMenu setOpenMenu={setOpenMenu} openMenu={openMenu}/>}
   </div>
  )
}

function BurguerMenu({ setOpenMenu, openMenu }) {

  return(

    <ul className='burguer-list'>
      <Link to='Login'><li className='burguer-login' onClick={() => setOpenMenu(!openMenu)}>Login</li></Link>
      <Link to='Registrarse'><li className='burguer-register' onClick={() => setOpenMenu(!openMenu)}>Registrate</li></Link>
      {headerLinks.map(button => <Link to={button.link} key={button.link}><li key={button.link} className='burguer-link' onClick={() => setOpenMenu(!openMenu)}>{button.name}</li></Link>)}
    </ul>

  )
}
