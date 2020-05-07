import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import ProfileContainer from './ProfileContainer'
import RewardsContainer from './RewardsContainer'


const MainParentContainer = () => {
    
    
    
    return(
        <div>
            <ProfileContainer />
            <RewardsContainer />
        </div>
    )
}

export default MainParentContainer;