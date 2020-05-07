import React, { useState, useEffect } from 'react'
import ProfileContainer from './ProfileContainer'
import { NavLink } from 'react-router-dom'

import NavBar from '../components/NavBar'



const MainChildContainer = () => {
    
    
    
    return(
        <div>
            {/* <NavBar /> */}
            <ProfileContainer />
        </div>
    )
}

export default MainChildContainer;

