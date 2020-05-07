import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './form.css'

const NewRewardForm = (props) => {


    const [rewardInfo, setReward] = useState({})

    const nextPath = (path) => {
        props.history.push(path);
        // console.log(props)
    }

    const handleChange = (e) =>{
        setReward({...rewardInfo, [e.target.name]: e.target.value})
        
        }

        const familyId = parseInt(localStorage.familyId)

        const newReward = (e) => {
            e.preventDefault()
            console.log(e)
            fetch('http://localhost:3000/rewards', {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                   name: rewardInfo.name,
                   description: rewardInfo.description,
                   price: rewardInfo.price,
                   family_id: familyId,
                })
            })
            .then(nextPath('/rewards'))
            .then(alert('Reward Created!'))
            // .then(console.log(rewardInfo))
        }


        console.log(rewardInfo)
    return(
        <div className="newform">
            <h3>Add New Reward</h3>
            <Form onSubmit={(e)=>newReward(e)}>
            <Form.Field>
            <label>Name</label>
            <input onChange={(e)=>handleChange(e)} name="name" placeholder='enter name of reward' required/>
            </Form.Field>
            <Form.Field>
            <label>Description</label>
            <input onChange={(e)=>handleChange(e)} name="description" placeholder='enter description of reward' required/>
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input onChange={(e)=>handleChange(e)} name="price" type="number" placeholder='enter cost of reward' required/>
            </Form.Field>
            <Form.Field>
                <input className="submit-button" type="submit" />
            </Form.Field>
            </Form>
        </div>
    )
}

export default NewRewardForm;
