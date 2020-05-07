import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NewRewardForm = () => {


    return(
        <div>
            <h3>Add New Reward</h3>
            <form onSubmit={null}>
                <label>Name:  </label>
                <input onChange={(e)=> handleChange(e)} name="name" type="text" placeholder="enter name of reward" /><br/>
                <label>Description:  </label>
                <input onChange={(e)=> handleChange(e)} name="description" type="text" placeholder="enter a description" /><br/>
                <label>Price:  </label>
                <input onChange={(e)=> handleChange(e)} name="price" type="text" placeholder="enter the price" /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewRewardForm;