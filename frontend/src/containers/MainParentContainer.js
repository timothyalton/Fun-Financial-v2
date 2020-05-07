import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import ProfileContainer from './ProfileContainer'
import RewardsContainer from './RewardsContainer'
import ChoresContainer from './ChoresContainer'


const MainParentContainer = () => {
    
    
    
    return(
        <div>
            <ProfileContainer />
            <RewardsContainer />
            <ChoresContainer />
        </div>
    )
}

export default MainParentContainer;