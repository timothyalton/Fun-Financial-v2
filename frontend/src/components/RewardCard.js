import React, { useState, useEffect } from 'react'

const RewardCard = (props) => {

    console.log(props)
    return(
        <div>
            <h4>{props.reward.name}</h4>
            <p>{props.reward.description}</p>
            <p>${props.reward.price}</p>
            {localStorage.role == "child" ? <button>Purchase</button> : <button>Edit</button>}
            {localStorage.role == "gaurdian" ? <button>Remove Reward</button> : null}
        </div>
    )
}

export default RewardCard;