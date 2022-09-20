import React from 'react';
import { Link } from "react-router-dom";
import {alertConfirmation, alertInfo, alertError  } from './Alert.js';
function Home() {
    return (
        <div>
            <h2>Soy el componente Home</h2>
            <Link to="/news">Click to view our News page</Link><br />
            <Link to="/about">Click to view our About page</Link>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    )
}

export default Home;