import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'
import './rewardcontainer.css'

import RewardCardLimited from '../components/RewardCardLimited'

const RewardsContainer = () => {


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

    console.log(results)
    return(
        <div className="container">
            <button className="button"><NavLink to="/newrewardform">Add Reward</NavLink></button><br/>
             {results.length > 0 ? results.slice(0,3).map(reward => (
            <RewardCardLimited reward={reward}/>
            )) : null } 
        </div>
    )
}

export default RewardsContainer;