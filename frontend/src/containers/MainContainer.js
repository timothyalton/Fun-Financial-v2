import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


import MainParentContainer from  './MainParentContainer'
import MainChildContainer from  './MainChildContainer'
import NavBar from '../components/NavBar'

const MainContainer = (props) => {
    
    // const [userInfo, setUser] = useState({})

    const nextPath = (path) => {
        props.history.push(path);
        // console.log(props)
    }


    const displayMainProfile = () => {
        if (localStorage.token && localStorage.role === "gaurdian")
            return <MainParentContainer />
        else if (localStorage.token && localStorage.role === "child")
            return <MainChildContainer />
        else
            return null
    }
    
    return(
        <div>
        <NavBar props={props}/><br/>
        {displayMainProfile()}
        </div>
    )
}

export default MainContainer;