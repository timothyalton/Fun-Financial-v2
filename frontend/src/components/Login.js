import React, {useState} from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './form.css'


import NavBar from './NavBar'




const Login = (props)=> {

    const [loginInfo, setLogin] = useState({})


    const clickLogin = (path) => {
        if (localStorage.token){
            props.history.push(path)
        }else{return null};
        // console.log(props)
    }

    const clickSignup = (path) => {
            props.history.push(path)
        // console.log(props)
    }

    const handleChange = (e) =>{
        setLogin({...loginInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginInfo.username,
                password: loginInfo.password
            })
        })
        .then(resp => resp.json())
        .then(user => {
            // debugger
            // localStorage.setItem("token", userInfo.token)
            if (user.error) {
                alert(user.error)
            }
            localStorage.token = user.token
            localStorage.role = user.role
            localStorage.familyId = user.familyId
            localStorage.familyPin = user.familyPin
            localStorage.userId = user.userId
            localStorage.walletId = user.wallet
            localStorage.creditScoreId = user.creditScore
            localStorage.creditLineId = user.creditLine
        })
    }


    return(
        <div className="main">
            <NavBar props={props}/>
            <h2 className="title">Fun Financial</h2>
        <div className="auth-bgrnd">
            <h2 className="white">Login</h2>
            {/* <form onSubmit={(e)=>{handleSubmit(e); clickLogin('/profile')}}>
                <label>User Name</label>
                <input onChange={(e) => handleChange(e)} name="username" type="text" required />
                <br/>
                <label>Password</label>
                <input onChange={(e) => handleChange(e)} name="password" type="password" required />
                <br/>
                <input type="submit" value="Login" />
            </form>
            <button onClick={()=> clickSignup('/signup')}>Sign Up</button> */}
        <Form onSubmit={(e)=>{handleSubmit(e); clickLogin('/profile')}}>
            <Form.Field>
            <label className="white" style={{color: "white"}}>User Name</label>
            <input onChange={(e)=>handleChange(e)} name="username" placeholder='username' required/>
            </Form.Field>
            <Form.Field>
            <label className="white" style={{color: "white"}}>Password</label>
            <input onChange={(e)=>handleChange(e)} name="password" type="password" placeholder='password' required/>
            </Form.Field>
            <Form.Field>
                <input className="submit-button" type="submit" value="Login"/>
            </Form.Field>
        </Form><br/>
        <button className="submit-button"onClick={()=> clickSignup('/signup')}>Sign Up</button>

        </div>
        </div>
    )
}

export default Login;

      
