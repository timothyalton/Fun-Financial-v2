import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './cclimited.css'


const ChoreCardLimited = (props) => {

    if(localStorage.role === "gaurdian") { 
        return(
        <div className="container">
            {/* <h4>{props.reward.name}</h4>
            <p>{props.reward.description}</p>
            <p>${props.reward.price}</p> */}
            <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='./chore.png'
        />
        <Card.Header>{props.chore.name}</Card.Header>
        <Card.Meta>${props.chore.pay}</Card.Meta>
        {/* <Card.Description>
          {props.reward.description}
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )} else {
        return(
            <div className="container">
            {/* <h4>{props.reward.name}</h4>
            <p>{props.reward.description}</p>
            <p>${props.reward.price}</p> */}
            <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='./chore.png'
        />
        <Card.Header>{props.chore.name}</Card.Header>
        <Card.Meta>${props.chore.pay}</Card.Meta>
        {/* <Card.Description>
          {props.reward.description}
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Acquire Job
          </Button>
          {/* <Button basic color='red'>
            Remove
          </Button> */}
        </div>
      </Card.Content>
    </Card>
        </div>  
        )
    }
}

export default ChoreCardLimited;

