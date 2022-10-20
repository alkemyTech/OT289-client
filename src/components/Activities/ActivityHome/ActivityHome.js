import React, { useEffect, useState } from 'react'
import './ActivityHome.css'
import { customFetch } from '../../../services/fetch'
import { BASE_PATH } from '../../../utils/constants'
import { ToastContainer, toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ActivityMain = () => {

    const [ activitiesArray, setActivitiesArray ] = useState([])
    const url = `${BASE_PATH}/activities`
    const fetchParams = {
      method: 'get'
    }

    useEffect(() => {
      customFetch(url, fetchParams)
        .then(activities => {
          if (activities === undefined) {
            toast.error( 'La base de datos no se encuentra disponible' , {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
          return []
          }
          setActivitiesArray(activities.data)
        })
          .catch(error => console.log(error))
    }, [])

    console.log(activitiesArray)

  return (
    <>
    <h1>Lista de actividades</h1>
    <div className='activity-grid'>
      {activitiesArray.map(activity => <ActivityCard key={activity.name} name={activity.name} image={activity.image} content={activity.content} id={activity.id}/>)}
    </div>
    <ToastContainer/>
    </>
    )
}

const ActivityCard = ({ name, image, id }) => {
  return (
    <>
    <div className='activity-card'>
      <div className='image-container'>
        <img src={image} alt={name}></img>
      </div>
      <p className='activity-name'>{name}</p>
      <Link to={`/actividades/${id}`}><button className='activity-button'>Ver mas</button></Link>
    </div>
    </>
  )
}

export default ActivityMain