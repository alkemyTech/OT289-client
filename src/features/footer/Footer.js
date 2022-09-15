import React from 'react';
//import styles from './Footer.module.css';


export function Footer() {
    return (
        <div className='container' style={{ backgroundColor: "#f3f6fd"}}>
            <div className='row justify-content-center' >
                <div className='col-md-9 text-center'>
                    <div className='footer-site-logo mb-4' style={{ color: "#4200ff", textAlign: "center", fontSize: "2rem", fontWeight: 900 }}>
                        <h3>SOMOS MAS</h3>
                    </div>
                    <ul className='list-unstyled nav-links mb-5' style={{ margin: 0, padding: 0 }}>
                        <li style={{ display: "inline-block", padding: "10px", color: "#111" }}>Inicio</li>
                        <li style={{ display: "inline-block", padding: "10px", color: "#111" }}>Nosotros</li>
                        <li style={{ display: "inline-block", padding: "10px", color: "#111" }}>Novedades</li>
                        <li style={{ display: "inline-block", padding: "10px", color: "#111" }}>Testimonios</li>
                        <li style={{ display: "inline-block", padding: "10px", color: "#111" }}>Contacto</li>
                        <li style={{ display: "inline-block", padding: "10px", color: "#111" }}>Contribuye</li>
                    </ul>
                </div>

                <div className='social mb-4'>
                    <h3>Siguenos en</h3>
                    <ul class="list-unstyled">
                        <li class="in"><span><i className='bi bi-instagram'></i></span></li>
                        <li class="fb"><span><i className='bi bi-facebook'></i></span></li>
                        <li class="tw"><span><i className='bi bi-twitter'></i></span></li>
                    </ul>
                </div>

                <div className="copyright">
                    <p className="mb-0"><small>2022 by &copy;Alkemy. All Rights Reserved.</small></p>
                </div>
            </div>
        </div>
    );
}
