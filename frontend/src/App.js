import React, { useState, useEffect } from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

import MainContainer from './containers/MainContainer'
import RewardsMainContainer from './containers/RewardsMainContainer'
import ChoresMainContainer from './containers/ChoresMainContainer'




const App = () => {

  const getRewards = () => {
    fetch('http://localhost:3000/rewards', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(console.log)
  }

  const getChores = () => {
    fetch('http://localhost:3000/chores')

  }



  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/profile" render={(routerProps)=> <MainContainer {...routerProps}/>} />
          <Route exact path="/" render={(routerProps)=> <Login {...routerProps}/>} />
          <Route exact path="/signup" render={(routerProps)=> <SignUp {...routerProps}/>} />
          <Route exact path="/rewards" render={(routerProps)=> <RewardsMainContainer {...routerProps}/>} />
          <Route exact path="/chores" render={(routerProps)=> <ChoresMainContainer {...routerProps}/>} />
          

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
