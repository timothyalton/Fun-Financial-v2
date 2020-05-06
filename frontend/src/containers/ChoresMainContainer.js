import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'

import ChoreCard from '../components/ChoreCard'


const ChoresMainContainer = () => {
    
    const [chores, setChores] = useState([])

    // shows chores
    const showChores = () => {
    fetch('http://localhost:3000/chores', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(chores => {
        // console.log(chores)
        setChores(chores)
    })
    };
     
    useEffect(() => showChores(), [])

    const results = chores.length > 0 ? chores.filter(chore => chore.family_id == localStorage.familyId) : []

    return(
        <div>
            <NavBar />
            {/* Not working!  */}
            {chores.forEach(c => console.log(c))}

            {results.length > 0 ? results.map(chore => (
            <ChoreCard chore={chore}/>
            )) : null } 
        </div>
    )
}

export default ChoresMainContainer;