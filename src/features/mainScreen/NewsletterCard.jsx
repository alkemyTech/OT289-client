import React from 'react'
import './NewsletterCard.css'

const NewsletterCard = ({ img, text }) => {
  return (
    <div className='card-container'>
        <div className='img-container'>
            <img className='new-img' src={img} alt="Not found" width="150" height="150"/>
        </div>
        <div className='info-container'>
            <div className='preview-container'>
                <p className='new-text'>{text}</p>
            </div>
            <div className='new-button-card'>
                <button className='new-button'>Ver Novedad</button>
            </div>
        </div>
    </div>
  )
}

export default NewsletterCard