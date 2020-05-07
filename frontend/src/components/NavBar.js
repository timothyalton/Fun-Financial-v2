 import React, { useState, useEffect } from 'react'
 import { NavLink } from 'react-router-dom'
 import "./nav.css"
 
 const NavBar = ()=> {

    // const nextPath = (path) => {
    //     // props.history.push(path);
    //     console.log(props)
    // }

    if (localStorage.token) { 
        return(
        <div>
            {/* <h2 style={{margin: "auto"}}>Fun Financial</h2> */}
            {/* <button onClick={() => localStorage.clear()}><NavLink to="/"> Log Out </NavLink></button> */}
        <ul className="nav">
            <li><NavLink to="/profile">Home</NavLink></li>
            <li><NavLink to="/rewards">Rewards</NavLink></li>
            <li><NavLink to="/chores">Chores</NavLink></li>
            <li onClick={() => localStorage.clear()} className="right"><NavLink to="/">Log Out</NavLink></li>
        </ul>

        </div>
    ) } 
    else {
    return(
        <div>

            {/* <button onClick={() => localStorage.clear()}><NavLink to="/"> Log Out </NavLink></button> */}
        <ul>
            {/* <h2 style={{margin: "auto"}}>Fun Financial</h2> */}

            {/* <li><NavLink to="/profile">Home</NavLink></li> */}
            <li><NavLink to="/">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li onClick={() => localStorage.clear()} className="right"><NavLink to="/">Log Out</NavLink></li>
        </ul>

        </div>
    ) }
 }

 export default NavBar;