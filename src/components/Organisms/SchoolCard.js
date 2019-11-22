import React from 'react'

function SchoolCard(props){


 

    return(
        <div>
            <p>School: {props.school_name}</p>
            <p>Description: {props.about}</p>
            <p>Student Count: {props.num_students}</p>
            <p>Grade Level: {props.grade_level}</p>
            <p>Issue Count: {props.num_issues}</p>
            <p>Estimated Costs: {props.est_costs}</p>
            <p>Street: {props.school_street}</p>
            <p>City: {props.school_city}</p>
            <p>State: {props.school_state}</p>
            <p>Postal Code: {props.post_code}</p>
            <p>Phone: {props.phone}</p>


           
        </div>
    )
}

export default SchoolCard