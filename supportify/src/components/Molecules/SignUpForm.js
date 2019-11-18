import React from 'react'
import { connect } from 'react-redux'

import {postMember, updateName, updateCity, updateEmail, updateRole, updateLastName} from '../../actions'


function SignUpForm(props){

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

    const handleNewRole = e => {
        props.updateRole(e.target.value)
    }

    return (


        <div>
           SignUpForm
           <form  >
                <label name='member-name' >First Name</label>
                <input type="text" name='member-name' value={props.name} onChange={handleNewName}/>

                <label name='member-lname' >Last Name</label>
                <input type="text" name='member-lname' value={props.lname} onChange={handleNewLastName}/>

                <label name='member-city'>City</label>
                <input type="text" name='member-city' value={props.city} onChange={handleNewCity}/>
            
                <label name='member-email'>Email</label>
                <input type="text" name='member-email' value={props.email} onChange={handleNewEmail}/>

                <label name='member-role'>Role/Position</label>//Role
                <input type="text" name='member-role' value={props.role} onChange={handleNewRole}/>

                <button type="button" onClick={()=> props.postMember(props.name, props.city, props.email, props.lastname, props.role)}>Make a Member!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    postMember,
    updateName,
    updateLastName,
    updateCity,
    updateEmail,
    updateRole
}

export default connect(state => state, mapDispatchToProps)(SignUpForm)