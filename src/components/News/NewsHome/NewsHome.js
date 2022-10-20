import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { customFetch } from '../../../services/fetch'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader'


import styles from './NewsHome.module.css'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

const NewsHome = () => {
    const [ news, setNews ] = useState(null)

    const getNews = async () => {
        try {
            const url = `${SERVER_BASE_URL}/news`
            const properties = {
                method: 'get'
            }

            const res = await customFetch(url, properties)
            setNews(res.data.reverse())
        } catch (error) {
            console.log('Error getting news: ', error)
        }
    }

    const NewsCard = ({ item }) => {
        const { id, name, image } = item

        return (
            <div className={styles.card}>
                <Link to={`/novedades/${id}`}>
                    <Card.Img variant="top" src={image} className={styles.image} />
                </Link>

                <Card.Body className={styles.body}>
                    <h2>
                        <Link to={`/novedades/${id}`} className={styles.title}>{name}</Link>
                    </h2>
                    <Button href={`/novedades/${id}`} variant="outline-primary" className={styles.button}>Ver Detalle</Button>
                </Card.Body>
            </div>
        )
    }

    const NewsList = () => {
        return (
            <CardGroup>
                {news.map((item, index)=> <NewsCard key={index} item={item} /> )}
            </CardGroup>
        )
    }

    useEffect(() => {
        getNews()
    },[])

    if (!news) {
        return (
            <>
                <h1>Listado de Novedades</h1>
                <Loader />
                <p>Cargando...</p>
            </>
        )
    }

    return (
        <>
            <h1>Listado de Novedades</h1>
            {news.length === 0 ?
                <p>No se encontraron novedades.</p>
            :
                <NewsList />
            }
        </>
    )
}

export default NewsHome
