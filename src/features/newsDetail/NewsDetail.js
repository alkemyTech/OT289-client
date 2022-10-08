import React, {useState,useEffect} from "react"
import "./NewsDetail.css"
import publicService from "../../services/publicService"
import { useParams } from "react-router-dom"

const NewsDetail = ({defaultNews}) => {

    const [news, setNews] = useState(defaultNews)
    const params = useParams()

    const getNews = async (values) => {
        let response = await publicService.newsDetail(params.id)
        setNews(response.data)
    }

    useEffect(()=>{
        getNews()
    },[])

    return (
        <>
        {news.id == undefined &&
            <h1 className="text-center">Datos No encontrados</h1>
        }

        {news.id != undefined &&
            <React.Fragment>
                <Header title={news.name} datetime={news.createdAt} image={news.image}/>
                <Content content={news.content}/>
            </React.Fragment>
        }
        </>
    )
}


NewsDetail.defaultProps = {defaultNews:
    {title:'',content:'',createdAt:new Date().toISOString()}
}


const Header = ({title, datetime, image}) => {

    const date = new Date(datetime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    let imageUrl = "http://localhost:3001/images/news/"

    return (
        
        <header className="newsHeader d-flex align-items-center" style={{backgroundImage: 'url(' + imageUrl+ image + ')'}}>
        
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



const Content = ({content}) => {

    return (
        
        <div className="newsBody">
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <p className="newsContent">{content}</p>
                </div>
            </div>
        </div>
        
    )
}




export default NewsDetail