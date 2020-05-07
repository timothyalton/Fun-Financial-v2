import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './form.css'


const NewChoreForm = (props) => {

    const [choreInfo, setChore] = useState({})

    const nextPath = (path) => {
        props.history.push(path);
        // console.log(props)
    }

    const handleChange = (e) =>{
        setChore({...choreInfo, [e.target.name]: e.target.value})
        
        }

    const familyId = parseInt(localStorage.familyId)

    const newChore = (e) => {
        e.preventDefault()
        console.log(e)
        fetch('http://localhost:3000/chores', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               name: choreInfo.name,
               pay: choreInfo.pay,
               family_id: familyId,
            })
        })
        .then(nextPath('/chores'))
        .then(alert('Chore Created!'))
        // .then(console.log(rewardInfo))
    }

    return(
        <div className="newform">
            <h3>Add New Chore</h3>
            <Form onSubmit={(e)=>newChore(e)}>
            <Form.Field>
            <label>Name</label>
            <input onChange={(e)=>handleChange(e)} name="name" placeholder='enter name of chore' required/>
            </Form.Field>
            <Form.Field>
            <label>Pay Out</label>
            <input onChange={(e)=>handleChange(e)} name="pay" type="number" placeholder='enter pay of chore' required/>
            </Form.Field>
            <Form.Field>
                <input className="submit-button" type="submit" />
            </Form.Field>
            </Form>
        </div>
    )
}

export default NewChoreForm;


   
  