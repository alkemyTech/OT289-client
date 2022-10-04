import React from 'react'
import { useParams } from 'react-router-dom'
import './ActivityPage.css'
import { BASE_PATH } from '../../utils/constants'
import { customFetch } from '../../services/fetch'

const ActivityPage = () => {

    const params = useParams()
    const id = params.id

    const getActivity = () => {
        const url = `${BASE_PATH}/activities/${id}`
        const properties = {
            method: 'get'
        }
        try {
            
        } catch (error) {
            
        } 
    }



  return (
    <div>ActivityPage</div>
  )
}

export default ActivityPage