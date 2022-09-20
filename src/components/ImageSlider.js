import React from 'react';
import { useState } from 'react';
const ImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const containerStyles = {
        width: '75%',
        height: '280px',
        margin: '0 auto',
    };
    const editFormStyles = {
        height: '100%',
        position: 'relative',
    };
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };
    const leftArrowStyles = {
        position: 'absolute',
        top: '100%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursos: 'pointer',
    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '100%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    };
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    };
    const dotStyles = {
        margin: '0px',
        cursor: 'pointer',
        fontSize: '20px'
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    };

    const handleSubmit = (event) => {
        alert("Editing done.");
        event.preventDefaul();
    };

    return (
        <form onSubmit={handleSubmit}>

            <div style={containerStyles}>

                <div style={editFormStyles}>

                    <h1>Edit Home Form</h1>

                    <textarea
                        name="textarea"
                        required
                        minLength="20"
                        cols="30"
                        rows="6"
                    />

                    <div style={leftArrowStyles} onClick={goToPrevious}>⇦</div>
                    <div style={rightArrowStyles} onClick={goToNext}>⇨</div>

                    <div
                        style={slideStyles}
                        name="slide"
                    >
                    </div>

                    <div style={dotsContainerStyles}>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                style={dotStyles}
                                onClick={() => goToSlide(slideIndex)}
                            >
                                ●
                            </div>
                        ))}
                    </div>

                    <p>{slides[currentIndex].title}</p>

                    <input type="submit" value="Enviar" />

                </div>

            </div>

        </form>
    )
};

export default ImageSlider;