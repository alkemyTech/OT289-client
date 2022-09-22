import React from 'react'
import s from './NewsletterCard.module.css'

const NewsletterCard = ({ img, text }) => {
  return (
    <div className={s.card_container}>
        <div className={s.img_container}>
            <img className={s.new_img} src={img} alt="Not found" width="150" height="150"/>
        </div>
        <div className={s.info_container}>
            <div className={s.preview_container}>
                <p className={s.new_text}>{text}</p>
            </div>
            <div className={s.new_button_card}>
                <button className={s.new_button}>Ver Novedad</button>
            </div>
        </div>
    </div>
  )
}

export default NewsletterCard