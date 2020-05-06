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
        setRewards(rewards)
    })
    };
     
    showRewards()

    return(
        <div>
            <NavBar />
            {rewards.map(reward => <RewardCard reward={reward}/>)}
            <div>

            </div>
        </div>
    )
}

export default RewardsMainContainer;