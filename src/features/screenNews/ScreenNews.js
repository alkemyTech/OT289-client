import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { customFetch } from '../../services/fetch'

import styles from './ScreenNews.module.css'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

const ScreenNews = () => {
    const [ news, setNews ] = useState(null)

    const getNews = async () => {
        try {
            const url = `${SERVER_BASE_URL}/news`
            const properties = {
                method: 'get'
            }
            const res = await customFetch(url, properties)
            setNews(res.data)
        } catch (error) {
            console.log('Error getting news: ', error)
        }
    }

    const redirectToDetailsPage = (id) => {
        return window.location.href = '/novedades/' + id
    }

    const NewsCard = ({ item, index }) => {
        const { id, name, image } = item

        const cardStyle = {
            width: index % 3 === 0 ? '100%' : '50%'
        }

        return (
            <div className={styles.card} style={cardStyle}>
                <Card.Img variant="top" src={image} className={styles.image} />
                <Card.Body>
                    <h2 className={styles.title}>{name}</h2>
                    <Button onClick={() => redirectToDetailsPage(id)} variant="outline-primary">Ver Detalle</Button>
                </Card.Body>
            </div>
        )
    }

    const NewsList = () => {
        return (
            <CardGroup>
                {news.map((item, index)=> <NewsCard key={index} item={item} index={index} /> )}
            </CardGroup>
        )
    }

    useEffect(() => {
        getNews()
    },[])

    if (!news) {
        return (
            <div className={styles.container}>
                <h1>Listado de Novedades</h1>
                <p>Cargando...</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1>Listado de Novedades</h1>
            {news.length === 0 ?
                <p>No se encontraron novedades.</p>
            :
                <NewsList />
            }
        </div>
    )
}

export default ScreenNews
