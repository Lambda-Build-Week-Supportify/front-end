import React from 'react'

import {connect} from 'react-redux'

import {specifyId} from "../../actions"
import EditButton from '../Atoms/EditButtonCRUD'

function SingleUserPage(props, {data, userInfo}){

    console.log("this is the id", props.id)

    return(
        <div>
           {props.specifyId(userInfo.user_id)}
           <EditButton forPage={'user'}/>
            <p>Name: {userInfo.fname + " " + userInfo.lname}</p>
            <p>City: {userInfo.city}</p>
            <p>State: {userInfo.province}</p>
            <p>Email: {userInfo.email}</p>
            <p>{userInfo.board == true ? "Board Member" : null}</p>
            <p>{userInfo.prime == true ? "Primary Admin" : null}</p>
            <p>{userInfo.sec == true ? "Secondary Admin" : null}</p>
            
           
        </div>
    )
}

const mapDispatchToProps ={
    specifyId
}

export default connect(state => state, mapDispatchToProps)(SingleUserPage)

//data accesses Route props