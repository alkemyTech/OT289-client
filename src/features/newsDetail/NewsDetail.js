import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import './NewsDetail.css'
import { customFetch } from '../../services/fetch'
import { useParams } from 'react-router-dom'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

const NewsDetail = () => {
    const [news, setNews] = useState(null)

    const params = useParams()
    const { id } = params

    const getNews = async () => {
        try {
            const url = `${SERVER_BASE_URL}/news/${id}`
            const properties = {
                method: 'get'
            }

            const res = await customFetch(url, properties)
            setNews(res.data)
        } catch (error) {
            console.log('Error getting news: ', error)
        }
    }

    const Header = ({ title, image, updatedAt }) => {
        const date = new Date(updatedAt)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
        return (
            <header className="newsHeader d-flex align-items-center" style={{backgroundImage: 'url(' + image + ')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="newsHeadingContainer">
                                <h1 className="newsTitle">{title}</h1>
                                <span className="newsDate">{date.toLocaleDateString('es-AR', options)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    const Content = ({ content }) => {
        return (
            <div className="newsBody">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto newsContent">
                        {content}
                    </div>
                </div>
            </div>
        )
    }

    const GoBackButton = () => {
        return (
            <Button href='/novedades' variant="outline-primary" className='button'>Ver más novedades</Button>
        )
    }

    useEffect(()=>{
        getNews()
    },[])

    if (!news) {
        return (
            <div className='mainContainer'>
                <h1>Cargando novedad</h1>
            </div>
        )
    }

    return (
        <div className='mainContainer'>
            <Header title={news.name} image={news.image} updatedAt={news.updatedAt} />
            <Content content={news.content} />
            <GoBackButton />
        </div>
    )
}

export default NewsDetail
