import React from 'react'

import {connect} from 'react-redux'

import {specifyId} from "../../actions"


import EditButton from '../Atoms/EditButtonCRUD'
import DeleteButton from '../Atoms/DeleteButtonCRUD'



function SingleSchoolPage(props){
  console.log("this is singleSchool obj", props.singleSchool)
//console.log("this is school page props", schoolInfo)

//console.log("this is super id", superId) // synced with card click!! now I can use this to edit or delete the proper pages
    return(
        <div>
            <EditButton forPage={"school"} formId={props.singleSchool.id}/>
            <p>School: {props.singleSchool.school_name}</p>
            <p>Description: {props.singleSchool.about}</p>
            <p>Student Count: {props.singleSchool.num_students}</p>
            <p>Grade Level: {props.singleSchool.grade_level}</p>
            <p>Issue Count: {props.singleSchool.num_issues}</p>
            <p>Estimated Costs: {props.singleSchool.est_costs}</p>
            <p>Street: {props.singleSchool.school_street}</p>
            <p>City: {props.singleSchool.school_city}</p>
            <p>State: {props.singleSchool.school_state}</p>
            <p>Postal Code: {props.singleSchool.post_code}</p>
            <p>Phone: {props.singleSchool.phone}</p>
            <DeleteButton/>
        </div>
    )
}

const mapDispatchToProps ={
    specifyId
}



export default connect(state => state, mapDispatchToProps)(SingleSchoolPage)

//data is to access Route props