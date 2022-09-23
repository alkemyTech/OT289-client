import React from "react"
import { Newspaper, JournalText, BookmarkStar, ChatLeftHeart, Easel2, PersonCircle, Building, People } from 'react-bootstrap-icons';


const Sidebar = ()=> {

    return (

        <div className="sidebarContainer d-flex flex-column min-vh-100" >
            <a href="/" className="d-flex align-items-center justify-content-center text-decoration-none">
                <img src="/images/web/LOGO-SOMOS MAS.png" className="sidebarLogo" alt="logo"></img>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column">
                <li className="sidebarItem">
                    <button className={"sidebarButton user-select-none sidebarButtonSelected"} >
                        <Newspaper className="sidebarIcon"/><span className="sidebarText">Novedades</span>
                    </button>
                </li>
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <JournalText className="sidebarIcon"/><span className="sidebarText">Actividades</span>          
                    </button>
                </li>
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <BookmarkStar className="sidebarIcon"/><span className="sidebarText">Categorias</span>
                    </button>
                </li>
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <ChatLeftHeart className="sidebarIcon"/><span className="sidebarText">Testimonios</span>
                    </button>
                </li>
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <Easel2 className="sidebarIcon"/><span className="sidebarText">Slides</span>
                    </button>
                </li>
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <PersonCircle className="sidebarIcon"/><span className="sidebarText">Usuarios</span>
                    </button>
                </li>
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <Building className="sidebarIcon"/><span className="sidebarText">Organizacion</span>
                    </button>
                </li>      
                <li className="sidebarItem">
                    <button className="sidebarButton user-select-none">
                        <People className="sidebarIcon"/><span className="sidebarText">Miembros</span>
                    </button>
                </li>      

                
            </ul>
            <hr></hr>
            <div>
                <button className="sidebarLogoutButton">Cerrar sesión</button>
            </div>
        </div>

        
    );
};

export default Sidebar;