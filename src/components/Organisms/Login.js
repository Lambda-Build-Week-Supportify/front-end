import React, {useState} from "react";

import {connect} from 'react-redux'

import { 
  updateUserName,
  updateUserBoard, 
  adminToFalse, 
  adminToTrue, 
  updatePassWord, 
  updatePassBoard,
  successGeneral,
  fetchSchools,
  fetchMembers,
  setUserId
} from "../../actions"

import axios from "axios"
import axiosWithAuth from '../../axios/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = (payload) => {
    const authAxios = axiosWithAuth()
      authAxios
          .post(`/auth/login`, payload)
          .then(res => {
              console.log("this is res.data", res);
             localStorage.setItem('token', res.data.token)
              //successGeneral()
              props.setUserId(res.data.user_id)
              //console.log("This is the userID", props.userID)
               return props.history.push("/dashboard")
          })
          .catch(err => {
              console.log("this is login error", err)
          })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    let captureEntries ={}
    if(props.admin === false){
      captureEntries = {
        username: props.userInputBoard['username'],
        password: props.userInputBoard['password']
    }
    }else{
        captureEntries = {
          username: props.userInput['username'],
          password: props.userInput['password']
      }
    }
   console.log("this is capture", captureEntries)
    login(captureEntries)
    props.fetchSchools()
    props.fetchMembers()

}


let adminStatus = () => {if(props.status== false){
  props.adminToFalse()
}else{
  props.adminToTrue()
}
}


const usernameStateValue = (props) => (props.greetName === "boardname" ? props.userInputBoard['username'] : props.userInput['username'])
const passwordStateValue = (props) => (props.greetName === "boardname" ? props.userInputBoard['password'] : props.userInput['password'])
  
  const handleUserChange = () => e => {
    e.preventDefault()
   props.status === false ? props.updateUserBoard(e.target.value) : props.updateUserName(e.target.value) 
 }
 


 const handlePassChange = () => e => {
  e.preventDefault()
   //props.updateUserBoard(usernameStateValue)
 props.status === false ? props.updatePassBoard(e.target.value) : props.updatePassWord(e.target.value) 
}










 // props.userInput['username']
// because it has to check if props.admin equals true it breaks the simultaneous updating of each login form. Still, the values should be different for whether this is true or not so I will make another userInput-like value to accept Board member login credentials. This will require changing the null in the falsey to the new userInput-like value

// console.log("this is props.admin",props.admin)


// console.log("this is usernameStateValue", usernameStateValue)

 console.log("this is props.userInputBoard",props.userInputBoard)

 console.log("this is props.userInput",props.userInput)

// oh man, I had my true and false on ternaries backwards for forever, jeez

//solved separation with props.greetName

const inputName = props.admin === false ? "boardname": "username"
const inputPass = props.admin === false ? "passboard": "password"

  return (
    <div >

      <h1>Welcome to Supportify</h1>
      <form onSubmit={handleLogin} style={{display:"flex", flexDirection: "column"}}>
      <label name={props.greetName}>Username</label>
      <input
      onClick={adminStatus}
          type="text"
          name={props.greetName}
          value={JSON.stringify(usernameStateValue)}
          onChange={handleUserChange(inputName)}
          
      />

      <label name={props.greetName}>Password</label>
      <input
      onClick={adminStatus}
          type="password"
          name={props.passName}
          value= {JSON.stringify(passwordStateValue)}
          onChange={handlePassChange(inputPass)}
      />
      <button  >Login!</button>
  </form>
    </div>
  );
};

const mapDispatchToProps = {
  updateUserName,
  updateUserBoard,
  adminToFalse,
  adminToTrue,
  updatePassWord,
  updatePassBoard,
  successGeneral,
  fetchSchools,
  fetchMembers,
  setUserId
}

export default connect(state=> state, mapDispatchToProps)(Login);
