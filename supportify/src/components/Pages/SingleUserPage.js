import React from 'react'

import {connect} from 'react-redux'

import {specifyId} from "../../actions"
import EditButton from '../Atoms/EditButtonCRUD'

function SingleUserPage(props){

    //console.log("this is the id", props.id)

    return(
        <div>
          
           <EditButton forPage={'user'} formId={props.singleUser.id}/>
            <p>Name: {props.singleUser.first_name + " " + props.singleUser.last_name}</p>
            <p>City: {props.singleUser.city}</p>
            <p>State: {props.singleUser.state}</p>
            <p>Email: {props.singleUser.email}</p>
            <p>{props.singleUser.board == true ? "Board Member" : null}</p>
            <p>{props.singleUser.prime == true ? "Primary Admin" : null}</p>
            <p>{props.singleUser.sec == true ? "Secondary Admin" : null}</p>
            
           
        </div>
    )
}

const mapDispatchToProps ={
    specifyId
}

export default connect(state => state, mapDispatchToProps)(SingleUserPage)

//data accesses Route props