import React, {useState} from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom'



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
        })
    }


    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={(e)=>{handleSubmit(e); clickLogin('/profile')}}>
                <label>User Name</label>
                <input onChange={(e) => handleChange(e)} name="username" type="text" required />
                <br/>
                <label>Password</label>
                <input onChange={(e) => handleChange(e)} name="password" type="password" required />
                <br/>
                <input type="submit" value="Login" />
            </form>
            <button onClick={()=> clickSignup('/signup')}>Sign Up</button>
        </div>
    )
}

export default Login;