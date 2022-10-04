import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios'
import styles from './screennews.module.css'


//test data (replace with receiving data from public endpoint when available) 
   const getNews = [
        {
            id: 1,
            name: 'Novedad 1',
            image:'explore-01.jpg',
            createdAt: '2022-09-14 00:38:35'
        },
        {   
            id: 2,
            name: 'Novedad 2',
            image:'explore-02.jpg',
            createdAt: '2022-09-15 00:38:35'
        },
        {
            id: 3,
            name: 'Novedad 3',
            image:'explore-03.jpg',
            createdAt: '2022-09-16 00:38:35'
        },
    
        {
            id: 4,
            name: 'Novedad 4',
            image:'explore-04.jpg',
            createdAt: '2022-09-17 00:38:35'
        },
        
    
    ];
         
    
   const getNewId = (id) => {
       return window.location.href = "/news/"+id;
     }
    
      

 
const screenN = () => {

    return(
        <React.Fragment>
            <h1>Listado de Novedades</h1>
      
        <CardGroup>
              
        {(getNews.length > 0) &&   
          
          getNews.map((b, i)=> {
            return (
                <div className= {styles.card} >
                <Card key={i} >            
                <Card.Img variant="top" src={"images/"+b.image} />
                <Card.Body>
                <Card.Title>{b.name}</Card.Title>
                <Button onClick={() => getNewId(b.id)} variant="primary">Ver Detalle</Button>{' '}        
                </Card.Body>
            </Card></div>     
            )     
         })
        }
     
    </CardGroup>  
    </React.Fragment>
 
    )
}
 

export default screenN;
