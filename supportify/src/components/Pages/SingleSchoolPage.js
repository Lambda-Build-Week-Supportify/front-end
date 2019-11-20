import React from 'react'

function SingleSchoolPage({data, schoolInfo}){

console.log("this is school page props", schoolInfo)
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

export default SingleSchoolPage


//data is to access Route props