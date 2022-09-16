import React from 'react';
import { Link } from "react-router-dom";

function News() {
    return (
        <div>
            <h2>Soy el componente News</h2>
            <Link to="/">Click to view our Home page</Link><br />
            <Link to="/about">Click to view our About page</Link>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    )
}

export default News;