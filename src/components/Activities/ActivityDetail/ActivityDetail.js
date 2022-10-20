import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ActivityDetail.css'
import { BASE_PATH } from '../../../utils/constants'
import { customFetch } from '../../../services/fetch'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

const ActivityPage = () => {

    const [activityExist, setActivityExist] = useState(false)
    const [nullActivity, setNullActivity] = useState(false)
    const [activity, setActivity] = useState({})


    const params = useParams()
    const id = params.id

    const getActivity = () => {
        const url = `${BASE_PATH}/activities/${id}`
        const properties = {
            method: 'get'
        }
        try {
            const result = customFetch(url, properties)
            return result
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        getActivity()
            .then(activity => {
                if(!activity.data) {
                    setNullActivity(true)
                    setActivityExist(false)
                } else {
                    setNullActivity(false)
                    setActivityExist(true)
                    setActivity(activity.data)
                }
            })
    }, [])

  return (
    <>
    {nullActivity ? <ActivityNotFound /> : null}
    {activityExist ? <Activity activity={activity} /> : null}
    </>  
  )
}

const ActivityNotFound =  () => {

    return (
       <>
        <h1>404, La actividad no fue encontrada</h1>
       </> 
    )
}

const Activity = ({ activity }) => {

    return (
        <div className='activity-container'>
            <h1 className='activity-name-id'>{activity.name}</h1>
            <div className='col-md-10 col-lg-8 mx-auto activityContent'>
                {activity.content && parse(activity.content)}
            </div>
            <div className='activity-btn-cont'>
                <Link to='/actividades'><button className='activity-button-id'>Volver</button></Link>
            </div>
        </div>
    )
}

export default ActivityPage