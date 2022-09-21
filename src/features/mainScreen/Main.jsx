import React from "react";
import Slider from "../slider/Slider";
import NewsletterCard from "./NewsletterCard";
import "./Main.css";

const defaultText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas explicabo, sit animi deleniti dicta? Deleniti veritatis est temporibus voluptates nesciunt hic, deserunt facere delectus voluptatum, consequatur, quos maiores quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi, nemo asperiores ad.";
const defaultTitle = "HOLA BIENVENIDX";
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
const news = [{}];

const Main = ({ text = defaultText, title = defaultTitle, img = defaultImg }) => {
  return (
    <div className="body-container">
      <div className="hero">
        <div className="welcome-div">
          <h2 className="title">{title}</h2>
          <p className="welcome-text">{text}</p>
          <div>
            <button className="button">Contactanos</button>
          </div>
        </div>
        <div className="slider-div">
          <Slider images={img} />
        </div>
      </div>
      <div className="news">
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
      </div>
    </div>
  );
};

export default Main;
