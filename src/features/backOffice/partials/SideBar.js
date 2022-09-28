import React from "react"
import {Link, useLocation } from 'react-router-dom';

import { Newspaper, JournalText, BookmarkStar, ChatLeftHeart, Easel2, PersonCircle, Building, People } from 'react-bootstrap-icons';

let adminLabel = 1


const Sidebar = ()=> {

    let location = useLocation();

    return (

        <div className="sidebarContainer d-flex flex-column min-vh-100" >
            <a href="/" className="d-flex align-items-center justify-content-center text-decoration-none">
                <img src="/images/web/LOGO-SOMOS MAS.png" className="sidebarLogo" alt="logo"></img>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column">
                <li className="sidebarItem">
                    <Link to="news" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/news' ? 'sidebarButtonSelected' : ''}`}>
                        <Newspaper className="sidebarIcon"/><span className="sidebarText">Novedades</span>
                    </Link>
                </li>
                <li className="sidebarItem">
                    <Link to="activities" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/activities' ? 'sidebarButtonSelected' : ''}`}>
                        <JournalText className="sidebarIcon"/><span className="sidebarText">Actividades</span>          
                    </Link>
                </li>
                <li className="sidebarItem">
                    <Link to="categories" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/categories' ? 'sidebarButtonSelected' : ''}`}>
                        <BookmarkStar className="sidebarIcon"/><span className="sidebarText">Categorias</span>
                    </Link>
                </li>
                <li className="sidebarItem">
                    <Link to="testimonials" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/testimonials' ? 'sidebarButtonSelected' : ''}`}>
                        <ChatLeftHeart className="sidebarIcon"/><span className="sidebarText">Testimonios</span>
                    </Link>
                </li>
                <li className="sidebarItem">
                    <Link to="slides" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/slides' ? 'sidebarButtonSelected' : ''}`}>
                        <Easel2 className="sidebarIcon"/><span className="sidebarText">Slides</span>
                    </Link>
                </li>
                <li className="sidebarItem">
                    <Link to="users" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/users' ? 'sidebarButtonSelected' : ''}`}>
                        <PersonCircle className="sidebarIcon"/><span className="sidebarText">Usuarios</span>
                    </Link>
                </li>
                <li className="sidebarItem">
                    <Link to="organization" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/organization' ? 'sidebarButtonSelected' : ''}`}>
                        <Building className="sidebarIcon"/><span className="sidebarText">Organizacion</span>
                    </Link>
                </li>      
                <li className="sidebarItem">
                    <Link to="members" className={`sidebarButton user-select-none ${location.pathname === '/backOffice/members' ? 'sidebarButtonSelected' : ''}`}>
                        <People className="sidebarIcon"/><span className="sidebarText">Miembros</span>
                    </Link>
                </li>      

                
            </ul>
            <hr></hr>
            <div>
                <button className="sidebarLogoutButton">Cerrar Sesion</button>
            </div>
        </div>

        
    );
};

export default Sidebar;