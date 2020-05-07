import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Button, Checkbox, Select, Form } from 'semantic-ui-react'
import './form.css'

import NavBar from './NavBar'


const SignUp = (props)=> {

    const [account, setAccount] = useState({account: "parent"})
  
    const [loginInfo, setLogin] = useState({})
    


    const nextPath = (path) => {
        props.history.push(path);
        // console.log(props)
    }

    const handleChange = (e) =>{
    setLogin({...loginInfo, [e.target.name]: e.target.value})
    }

    const newUser = (e) => {
        e.preventDefault()
        // console.log(e)
        fetch('http://localhost:3000/user_signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email: loginInfo.email,
               username: loginInfo.username,
               firstname: loginInfo.firstname,
               lastname: loginInfo.lastname,
               password: loginInfo.password,
               password_confirmation: loginInfo.confirm_password,
               family_id: loginInfo.familyPin ? loginInfo.familyPin : false,
               role: account.account === "parent" ? 0 : 1          
            })
        })
        .then(nextPath('/'))
        .then(alert('Account Created! Please log in.'))
    }

    useEffect(()=> console.log(loginInfo))

    return(
        <div>
            <NavBar />
        <div className="signup">
            <h2 className="white">Signup</h2>
            {/* <form onSubmit={(e)=>newUser(e)}>  
                <label>Email:  </label>
                <input onChange={(e)=> handleChange(e)} name="email" type="text" placeholder="enter valid email" /><br/>
                <label>First Name:  </label>
                <input onChange={(e)=> handleChange(e)} name="firstname" type="text" placeholder="enter first name" /><br/>
                <label>Last Name:  </label>
                <input onChange={(e)=> handleChange(e)} name="lastname" type="text" placeholder="enter last name" /><br/>
                <label>UserName:  </label>
                <input onChange={(e)=> handleChange(e)} name="username" type="text" placeholder="enter a username" /><br/>
                <label>Password:  </label>
                <input onChange={(e)=> handleChange(e)} name="password" type="password" placeholder="enter a password" /><br/>
                <label>Confirm Password:  </label>
                <input onChange={(e)=> handleChange(e)} name="confirm_password" type="password" placeholder="confirm password" /><br/>
                <label>Accout Type:  </label>
                <select onChange={(event)=> setAccount(event.target.value === "gaurdian" ? "parent" : "child")}name="account">
                    {/* <option value="default">--select account type--</option> */}
                    {/* <option value="gaurdian" >Parent</option>
                    <option value="dependent">Child</option>
                </select><br/>
                    {account === "child" ? <div>
                        <label>Family PIN:  </label>
                        <input onChange={(e)=> handleChange(e)}name="familyPin" type="text" placeholder="enter family ID"/>
                    </div> : null}
                <input type="submit" />
            </form> * */}

<Form onSubmit={(e)=> newUser(e)}>
<Form.Field>
<label className="white" style={{color: "white"}}>Email</label>
<input onChange={(e)=>handleChange(e)} name="email" placeholder='example@example.com' required/>
</Form.Field>
<Form.Field>
<label className="white" style={{color: "white"}}>First Name</label>
<input onChange={(e)=>handleChange(e)} name="firstname" placeholder='enter first name' required/>
</Form.Field>
<Form.Field>
<label className="white" style={{color: "white"}}>Last Name</label>
<input onChange={(e)=>handleChange(e)} name="lastname" placeholder='enter last name' required/>
</Form.Field>
<Form.Field>
<label className="white" style={{color: "white"}}>Username</label>
<input onChange={(e)=>handleChange(e)} name="username" placeholder='enter username' required/>
</Form.Field>
<Form.Field>
<label className="white" style={{color: "white"}}>Password</label>
<input onChange={(e)=>handleChange(e)} name="password" type="password" placeholder='enter password' required/>
</Form.Field>
<Form.Field>
<label className="white" style={{color: "white"}}>Confirm Password</label>
<input onChange={(e)=>handleChange(e)} name="confirm_password" type="password" placeholder='confirm password' required/>
</Form.Field>
<Form.Field className="white"  label='Account Type' control='select' name="account" onChange={(event)=> setAccount(event.target.value === "gaurdian" ? "parent" : "child")} name="account">
        <option value='gaurdian'>Parent</option>
        <option value='child'>Child</option>
</Form.Field>

{ account === "child" ? <Form.Field>
    <label className="white" style={{color: "white"}}>Family PIN</label>
    <input onChange={(e)=> handleChange(e)} name="familyPin" type="text" placeholder="enter family PIN"/>
</Form.Field> : null }

<Form.Field>
    <input className="submit-button" type="submit" />
</Form.Field>
</Form>
        </div>
        </div>
    )
}

export default SignUp;

