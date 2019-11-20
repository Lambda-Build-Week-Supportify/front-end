import React from 'react'

import {connect} from 'react-redux'

import {specifyId} from "../../actions"






function changeID(props) {
    console.log("this is changeId props", props)//getting the route id

    

}

// specifyId(changeID(props))


function SingleSchoolPage({data, schoolInfo, superId}){
  
console.log("this is school page props", schoolInfo)

console.log("this is super id", superId) // synced with card click!! now I can use this to edit or delete the proper pages
    return(
        <div>
        
            <p>School: {schoolInfo.school_name}</p>
            <p>Description: {schoolInfo.about}</p>
            <p>Student Count: {schoolInfo.num_students}</p>
            <p>Grade Level: {schoolInfo.grade_level}</p>
            <p>Issue Count: {schoolInfo.num_issues}</p>
            <p>Estimated Costs: {schoolInfo.est_costs}</p>
            <p>Street: {schoolInfo.school_street}</p>
            <p>City: {schoolInfo.school_city}</p>
            <p>State: {schoolInfo.school_state}</p>
            <p>Postal Code: {schoolInfo.post_code}</p>
            <p>Phone: {schoolInfo.phone}</p>
           
        </div>
    )
}

const mapDispatchToProps ={
    specifyId
}

connect(state => state, mapDispatchToProps)(changeID)

export default SingleSchoolPage

//data is to access Route props