import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'

import RewardCard from '../components/RewardCard'


const RewardsMainContainer = () => {
    
    const [rewards, setRewards] = useState([])

    
    const showRewards = () => {
    fetch('http://localhost:3000/rewards', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(rewards => {
        // console.log(rewards)
        setRewards(rewards)
    })
    };
     
    useEffect(() => showRewards(), [])

    const results = rewards.length > 0 ? rewards.filter(reward => reward.family_id == localStorage.familyId) : []

    return(
        <div>
            <NavBar />
            {/* Not working!  */}
            {rewards.forEach(r => console.log(r))}

            {results.length > 0? results.map(reward => (
            <RewardCard reward={reward}/>
            )) : null } 
        </div>
    )
}

export default RewardsMainContainer;