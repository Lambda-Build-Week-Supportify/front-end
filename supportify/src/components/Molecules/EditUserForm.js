import React from 'react'
import { connect } from 'react-redux'

import {
    putMember, 
    updateName, 
    updateCity, 
    updateEmail, 
    updateRole, 
    updateLastName,
    setBoardMemberTrue,
    setPrimMemberTrue,
    setSecMemberTrue,
    updateProvince,
    updateSignupPass,
    updateSignupUser
} from '../../actions'

//     <label name='member-role'>Role/Position</label>
// <input type="text" name='member-role' value={props.role} onChange={handleNewRole}/>


function EditUserForm(props){

    const handleNewName = e => {
        props.updateName(e.target.value)
    }

    const handleNewLastName = e => {
        props.updateLastName(e.target.value)
    }

    const handleNewCity = e => {
        props.updateCity(e.target.value)
    }

    const handleNewEmail = e => {
        props.updateEmail(e.target.value)
    }

    const handleNewProvince = e => {
        props.updateProvince(e.target.value)
    }

    const handleNewUsername = e => {
        props.updateSignupUser(e.target.value)
    }

    const handleNewPassword = e => {
        props.updateSignupPass(e.target.value)
    }

    const handleNewRole = e => {
        // props.updateRole(e.target.value)
       let roleChange = e.target.name === 'board-role' ? props.setBoardMemberTrue : (e.target.name === 'prim-role' ? props.setPrimMemberTrue : props.setSecMemberTrue)

       roleChange()
        console.log("this is roles", props.board, props.primary_admin, props.sec_admin)
    }

    return (


        <div>
           EditUserForm
           <form  >
                <label name='member-name' >First Name</label>
                <input type="text" name='member-name' value={props.name} onChange={handleNewName}/>

                <label name='member-lname' >Last Name</label>
                <input type="text" name='member-lname' value={props.lname} onChange={handleNewLastName}/>

                <label name='member-city'>City</label>
                <input type="text" name='member-city' value={props.city} onChange={handleNewCity}/>

                <label name='member-state'>State</label>
                <input type="text" name='member-state' value={props.province} onChange={handleNewProvince}/>
            
                <label name='member-email'>Email</label>
                <input type="text" name='member-email' value={props.email} onChange={handleNewEmail}/>

                <label name='member-username'>Username</label>
                <input type="text" name='member-username' value={props.signupUsername} onChange={handleNewUsername}/>

                <label name='member-password'>Password</label>
                <input type="password" name='member-password' value={props.signupPassword} onChange={handleNewPassword}/>

                <label>Board Member</label>
                <input type="checkbox" name='board-role' value={props.board} onClick={handleNewRole}/>

                <label>Primary Member</label>
                <input type="checkbox" name='prim-role' value={props.board} onClick={handleNewRole}/>

                <label>Secondary Member</label>
                <input type="checkbox" name='sec-role' value={props.board} onClick={handleNewRole}/>

                <button type="button" onClick={()=> props.postMember(props.name, 
                    props.city, 
                    props.email, 
                    props.lastname, 
                    props.board, 
                    props.primary_admin, 
                    props.sec_admin, 
                    props.signupUsername, 
                    props.signupPassword, 
                    props.province)}>Make a Member!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    putMember,
    updateName,
    updateLastName,
    updateCity,
    updateEmail,
    updateRole,
    setBoardMemberTrue,
    setPrimMemberTrue,
    setSecMemberTrue,
    updateProvince,
    updateSignupPass,
    updateSignupUser
}

export default connect(state => state, mapDispatchToProps)(EditUserForm)

///IS THIS PUT SUPPOSED TO BE ID SPECIFIC?