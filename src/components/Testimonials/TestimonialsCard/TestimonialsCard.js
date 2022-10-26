import React from 'react'
import s from './TestimonialsCard.module.css'

const TestimonialsCard = ({ img, title, content }) => {
  return (
    <div className={s.cardContainer}>
      <div>
        <img className={s.image} src={img} alt="IMG" />
      </div>
      <div className={s.infoContainer}>
        <h3>{title}</h3>
        <p className="text-wrap">{content}</p>
      </div>
    </div>
  )
}

export default TestimonialsCard