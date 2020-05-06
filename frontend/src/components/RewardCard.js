import React, { useState, useEffect } from 'react'

const RewardCard = (props) => {


    return(
        <div>
            <h4>{props.reward.name}</h4>
            <p>{props.reward.description}</p>
            <p>${props.reward.price}</p>
        </div>
    )
}

export default RewardCard;