import React from "react"

import "./NewsDetail.css"

const NewsDetail = ({news}) => {

    return (
        <>
            <Header title={news.title} datetime={news.createdAt}/>
            <Content content={news.content}/>
        </>
    )
}


const Header = ({title, datetime}) => {

    const date = new Date(datetime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let imageUrl = "http://localhost:3000/images/placeholder/1920x680.png"

    return (
        
        <header className="newsHeader d-flex align-items-center" style={{backgroundImage: 'url('+imageUrl+')'}}>
        
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