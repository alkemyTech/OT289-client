import React from "react"
import {useSelector} from 'react-redux'
import {Link, useLocation, useNavigate } from 'react-router-dom';

import { PersonLinesFill, Newspaper, JournalText, BookmarkStar, ChatLeftHeart, Easel2, PersonCircle, Building, People } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux'
import { logout } from '../../user/userSlice'


let adminLabel = 1


const Sidebar = ()=> {

    let location = useLocation();
    const userState = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const singOff = () => {            
        localStorage.removeItem('token')
        dispatch(logout())        
        navigate('/')
    }

    return (

        <div className="sidebarContainer d-flex flex-column min-vh-100" >
            <a href="/" className="d-flex align-items-center justify-content-center text-decoration-none">
                <img src="/images/web/LOGO-SOMOS MAS.png" className="sidebarLogo" alt="logo"></img>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column">
                <li className="sidebarItem" >
                    <Link to="editProfile" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/editProfile' ? 'sidebarButtonSelected' : ''}`}>
                        <PersonLinesFill className="sidebarIcon"/><span className="sidebarText">Editar Perfil</span>
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="news" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/news' ? 'sidebarButtonSelected' : ''}`}>
                        <Newspaper className="sidebarIcon"/><span className="sidebarText">Novedades</span>
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="activities" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/activities' ? 'sidebarButtonSelected' : ''}`}>
                        <JournalText className="sidebarIcon"/><span className="sidebarText">Actividades</span>          
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="categories" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/categories' ? 'sidebarButtonSelected' : ''}`}>
                        <BookmarkStar className="sidebarIcon"/><span className="sidebarText">Categorias</span>
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="testimonials" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/testimonials' ? 'sidebarButtonSelected' : ''}`}>
                        <ChatLeftHeart className="sidebarIcon"/><span className="sidebarText">Testimonios</span>
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="slides" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/slides' ? 'sidebarButtonSelected' : ''}`}>
                        <Easel2 className="sidebarIcon"/><span className="sidebarText">Slides</span>
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="users" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/users' ? 'sidebarButtonSelected' : ''}`}>
                        <PersonCircle className="sidebarIcon"/><span className="sidebarText">Usuarios</span>
                    </Link>
                </li>
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="organization" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/organization' ? 'sidebarButtonSelected' : ''}`}>
                        <Building className="sidebarIcon"/><span className="sidebarText">Organizacion</span>
                    </Link>
                </li>      
                <li className={`sidebarItem ${userState.role === 1 ? '' : 'd-none'}`}>
                    <Link to="members" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/members' ? 'sidebarButtonSelected' : ''}`}>
                        <People className="sidebarIcon"/><span className="sidebarText">Miembros</span>
                    </Link>
                </li>      

                
            </ul>
            <hr></hr>
            <div>
                <button className="sidebarLogoutButton" onClick={singOff} >Cerrar Sesion</button>
            </div>
        </div>

        
    );

    
}


export default Sidebar;