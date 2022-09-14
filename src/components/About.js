import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <h2>Soy el componente About</h2>
            <Link to="/">Click to view our Home page</Link><br />
            <Link to="/news">Click to view our News page</Link>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    )
}

export default About;