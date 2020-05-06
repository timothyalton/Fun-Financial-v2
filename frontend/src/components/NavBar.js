 import React, { useState, useEffect } from 'react'
 import { NavLink } from 'react-router-dom'
 
 const NavBar = ()=> {

    // const nextPath = (path) => {
    //     // props.history.push(path);
    //     console.log(props)
    // }

    return(
        <div>
            <button onClick={() => localStorage.clear()}><NavLink to="/"> Log Out </NavLink></button>
        </div>
    )
 }

 export default NavBar;