import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


const RewardCardLimited = (props) => {

    return(
        <div>
            {/* <h4>{props.reward.name}</h4>
            <p>{props.reward.description}</p>
            <p>${props.reward.price}</p> */}
            <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='./reward.png'
        />
        <Card.Header>{props.reward.name}</Card.Header>
        <Card.Meta>${props.reward.price}</Card.Meta>
        <Card.Description>
          {props.reward.description}
        </Card.Description>
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
    )
}

export default RewardCardLimited;

