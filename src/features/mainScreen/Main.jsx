import React from "react";
import Slider from "../slider/Slider";
import NewsletterCard from "./NewsletterCard";
import s from "./Main.module.css";

const defaultText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas explicabo, sit animi deleniti dicta? Deleniti veritatis est temporibus voluptates nesciunt hic, deserunt facere delectus voluptatum, consequatur, quos maiores quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi, nemo asperiores ad.";

const defaultTitle = "Hola! Bienvenidx";

const defaultImg = [
  {
    imageUrl: 'images/campaign-recent-01.jpg',
    text: "HEROO",
  },
  {
    imageUrl: 'images/campaign-recent-02.jpg',
    text: "HEROO",
  },
  {
    imageUrl: 'images/campaign-recent-03.jpg',
    text: "HEROO",
  },
];

const defaultNews = [
  {
    img: "images/campaign-big-item.jpg",
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium animi quasi nulla obcaecati vero id, quo voluptates necessitatibus.'
  },
  {
    img: "images/campaign-tabs.jpg",
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium animi quasi nulla obcaecati vero id, quo voluptates necessitatibus.'
  },
  {
    img: "images/featured-places-01.jpg",
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium animi quasi nulla obcaecati vero id, quo voluptates necessitatibus.'
  },
  {
    img: "images/featured-places-02.jpg",
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium animi quasi nulla obcaecati vero id, quo voluptates necessitatibus.'
  }
];

const Main = ({ text = defaultText, title = defaultTitle, img = defaultImg, newsletter= defaultNews }) => {
  return (
    <div className={s.body_container}>
      <div className={s.hero}>
        <div className={s.welcome_div}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.welcome_text}>{text}</p>
          <div>
            <button className={s.main_button}>Contactanos</button>
          </div>
        </div>
        <div className={s.slider_div}>
          <Slider images={img} />
        </div>
      </div>
      <div className={s.newsletter_title_container}>
        <h2 className={s.newsletter_title}>Ùltimas Novedades</h2>
      </div>
      <div className={s.news}>
        {
          newsletter.map(n => (<NewsletterCard img={n.img} text={n.text}/>))
        }
      </div>
    </div>
  );
};

export default Main;
