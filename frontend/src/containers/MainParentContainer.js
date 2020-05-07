import React, { useState, useEffect } from 'react'
import ProfileContainer from './ProfileContainer'
import { NavLink } from 'react-router-dom'


const MainParentContainer = () => {
    
    
    
    return(
        <div>
            Main Parent Container
            <button><NavLink to="/rewards">See Rewards</NavLink></button>
            <button><NavLink to="/chores">See Chores</NavLink></button><br/>
            <ProfileContainer />
        </div>
    )
}

export default MainParentContainer;