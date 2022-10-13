import React, { useState, useEffect } from "react";
import { customFetch } from '../../services/fetch'
import {BASE_PATH} from '../../utils/constants'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Slider from "../slider/Slider";
import Loader from '../loader/Loader'
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

const Main = ({ text = defaultText, title = defaultTitle, img = defaultImg,}) => {

  const [news, setNews] = useState([])
  const url = `${BASE_PATH}/news`
  const properties = {
    method:'get'
  }


  useEffect(() => {
    customFetch(url, properties)
      .then(news => setNews(news.data))
        .catch(error => {
          toast.error( error.message , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        })
  }, [])

  function sortNews (a,b) {  
    if(a.createdAt > b.createdAt) {
      return -1;  
    } else if (a.createdAt < b.createdAt)  {
      return 1;
    }  
    return 0;  
  }
 // ordena de mayor a menor

news.sort(sortNews) // pedis que ordene segun la key de creacion de la noticia
const slicedNews = news.slice(0, 4) // con esto dejas las primeras 4 noticias

  return (
    <div className={s.body_container}>
      <div className={s.hero}>
        <div className={s.welcome_div}>
          <h2 className={s.title}>{title}</h2>
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
          slicedNews.map(notice => (<NewsletterCard key={notice.createdAt} name={notice.name} img={notice.image} text={notice.content}/>))
        }
      </div>
    </div>
  );
};

export default Main;
