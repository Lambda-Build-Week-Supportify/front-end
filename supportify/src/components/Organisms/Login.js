import React, {useState} from "react";

import {connect} from 'react-redux'

import { 
  updateUserName,
  updateUserBoard, 
  adminToFalse, 
  adminToTrue, 
  updatePassWord, 
  updatePassBoard} from "../../actions"

import axios from "axios"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  //  const [userInput000, setUserInput] = useState({'username': "", "password": ""})

  // const handleChange = type => e => {
  //    setUserInput({ ...userInput000, type: userInput000[type] = e.target.value })
  // }
  const handleUserChange = () => e => {
    e.preventDefault()
   props.status == false ? props.updateUserBoard(e.target.value) : props.updateUserName(e.target.value) 
 }
 

 const handlePassChange = () => e => {
  e.preventDefault()
 props.status == false ? props.updatePassBoard(e.target.value) : props.updatePassWord(e.target.value) 
}

  const login = (payload) => {
  
    axios
        .post(`http://localhost:5000/api/login/`, payload)
        .then(res => {
            console.log("this is res.data", res.data);
            localStorage.setItem('token', res.data.payload)
            
             return props.history.push("/dashboard")
        })
        .catch(err => {
            console.log("this is login error", err)
        })
}

  const handleLogin = (e) => {
      e.preventDefault()
      let captureEntries = {
          username: props.userInput['username'],
          password: props.userInput['password']
      }
      login(captureEntries)
  
 
  }


  let adminStatus = () => {if(props.status== false){
    props.adminToFalse()
  }else{
    props.adminToTrue()
  }
}
  const usernameStateValue = props.greetName == "boardname" ? props.userInputBoard['username'] : props.userInput['username']
  const passwordStateValue = props.greetName == "boardname" ? props.userInputBoard['password'] : props.userInput['password']
 // props.userInput['username']
// because it has to check if props.admin equals true it breaks the simultaneous updating of each login form. Still, the values should be different for whether this is true or not so I will make another userInput-like value to accept Board member login credentials. This will require changing the null in the falsey to the new userInput-like value

console.log("this is props.admin",props.admin)


console.log("this is usernameStateValue", usernameStateValue)

console.log("this is props.userInputBoard",props.userInputBoard)

console.log("this is props.userInput",props.userInput)

// oh man, I had my true and false on ternaries backwards for forever, jeez

//solved separation with props.greetName

const inputName = props.admin == false ? "boardname": "username"
const inputPass = props.admin == false ? "passboard": "password"

  return (
    <>
      <h1>Welcome to Supportify</h1>
      <form onSubmit={handleLogin}>
      <input
      onClick={adminStatus}
          type="text"
          name= {props.greetName}
          value= {usernameStateValue}
          onChange={handleUserChange(inputName)}
          
      />
      <input
          onClick={adminStatus}
          type="password"
          name={props.passName}
          value= {passwordStateValue}
          onChange={handlePassChange(inputPass)}
      />
      <button>Login!</button>
  </form>
    </>
  );
};

const mapDispatchToProps = {
  updateUserName,
  updateUserBoard,
  adminToFalse,
  adminToTrue,
  updatePassWord,
  updatePassBoard
}

export default connect(state=> state, mapDispatchToProps)(Login);
