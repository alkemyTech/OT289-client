import React from 'react';
import './activities.css';
import { useState, useEffect } from 'react';

/* DUMMY EXAMPLE ACTIVITIES */
let activities = ["activity1", "activity2", "activity3", "activity4"];

/* FETCH AND HOOKS TO BE USED ONCE ACTIVITIES ENDPOINT IS COMPLETED */

// const [activities, setActivities] = useState([]);

// const fetchData = async () => {;
//    const data = await fetch("urlActivitiesEndpoint");
//    const fetchedActivities = await data.json(); 
//    setUsers(fetchedActivities);
//}

// useEffect(
// () => {
// fetchData()
//}, []
// ) 

const Activities = () => {
    return (

        <table>
            <tr>
                <th>Activity</th>
                <th>Edit Activity</th>
                <th>Delete Activity</th>
            </tr>

            {activities.map((activity, index) => (
                <tr key={index}>
                    <td>{activity}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            ))}

        </table>
    )
};

export default Activities;