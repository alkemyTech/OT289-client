import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/module-4.jpg'
import img2 from '../assets/th-943738842.jpeg'
import img3 from '../assets/th-4014101304.jpeg'

import "./slider.css"

function editForm() {
    return (
        <form>
            <div>
                <textarea
                    id="textArea"
                    name="textArea"
                    placeholder="Modificar texto de bienvenida..."
                    rows="10"
                    cols="80"
                    minLength="20"
                    required />
            </div>
            <Carousel className="main-slide"
                autoPlay={true}
                interval={4000}
                infiniteLoop>
                <div>
                    <img src={img1} height="300px" width="200px" alt="" />
                    <p className="legend">Texto primer imagen</p>
                </div>
                <div>
                    <img src={img2} height="300px" width="200px" alt="" />
                    <p className="legend">Texto segunda imagen</p>
                </div>
                <div>
                    <img src={img3} height="300px" width="200px" alt="" />
                    <p className="legend">Texto tercera imagen</p>
                </div>
            </Carousel>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default editForm