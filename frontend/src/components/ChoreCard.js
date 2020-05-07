import React, { useState, useEffect } from 'react'

const ChoreCard = (props) => {

    return(
        <div>
            <h4>{props.chore.name}</h4>
            {/* <p>{props.chore.description}</p> */}
            <label>Pay Out</label>
            <p>${props.chore.pay}</p>
            {localStorage.role == "child" ? <button>Accept Job</button> : <button>Edit</button>}
            {localStorage.role == "gaurdian" ? <button>Remove Chore</button> : null}
        </div>
    )
}

export default ChoreCard;