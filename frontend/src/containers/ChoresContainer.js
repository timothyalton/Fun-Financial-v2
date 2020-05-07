import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'
import './chorescontainer.css'

import ChoreCardLimited from '../components/ChoreCardLimited'

const ChoresContainer = () => {


    const [chores, setChores] = useState([])

    const showChores = () => {
        fetch('http://localhost:3000/chores', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(resp => resp.json())
        .then(chores => {
            // console.log(rewards)
            setChores(chores)
        })
        };

    useEffect(() => showChores(), [])


    const results = chores.length > 0 ? chores.filter(chore => chore.family_id == localStorage.familyId) : []

    console.log(results)
    return(
        <div className="container">
            <button className="button"><NavLink to="/newchoreform">Add Chore</NavLink></button><br/>
             {results.length > 0 ? results.slice(0,3).map(chore => (
            <ChoreCardLimited chore={chore}/>
            )) : null } 
        </div>
    )
}

export default ChoresContainer;