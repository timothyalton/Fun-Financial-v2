import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'



const ProfileContainer = () => {

    const [userInfo, setUser] = useState([])
    const [wallet, setWallet] = useState([])
    const [creditScore, setScore] = useState([])
    const [creditLine, setCreditLine] = useState([])


    const getUserInfo = () => {
        fetch('http://localhost:3000/users', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(resp => resp.json())
        .then(users => {
            // console.log(users)
            setUser(users)
        })
        };
         
        useEffect(() => {
            if(localStorage.role === "gaurdian") {
                getUserInfo();
            }
            else { 
                getUserInfo()
                getWalletInfo()
                getCreditScoreInfo()
                getCreditLineInfo()
            }
        }, 
        [])

        const user = userInfo ? userInfo.find(user => user.id == localStorage.userId) : null
        // console.log(userInfo)

        const getWalletInfo = () => {
            fetch(`http://localhost:3000/wallets/${localStorage.walletId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(resp => resp.json())
        .then(wallet => {
            // console.log(wallet)
            setWallet(wallet)
        })
        }

        const getCreditScoreInfo = () => {
            fetch(`http://localhost:3000/credit_scores/${localStorage.creditScoreId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(resp => resp.json())
        .then(score => {
            // console.log(score)
            setScore(score)
        })
        }

        const getCreditLineInfo = () => {
            fetch(`http://localhost:3000/credit_lines/${localStorage.creditLineId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(resp => resp.json())
        .then(credit => {
            console.log(credit)
            setCreditLine(credit)
        })
        }

        


    return(
        <div>
            <h4>{user ? user.firstname : null} {user ? user.lastname : null}</h4>
            <p>{user ? user.email : null}</p>
            <p>{user ? user.username : null}</p>
            
            {localStorage.role === "child" ? <h5>Wallet:</h5> : null}
            {localStorage.role === "child" ? <p>${wallet.amount}</p> : null}

            {localStorage.role === "child" ? <h5>Credit Line:</h5> : null}
            {localStorage.role === "child" ? <p>0/{creditLine.amount}</p> : null}

            {localStorage.role === "child" ? <h5>Credit Score:</h5> : null}
            {localStorage.role === "child" ? <p>{creditScore.score}</p> : null}

        </div>
    )
}

export default ProfileContainer;
