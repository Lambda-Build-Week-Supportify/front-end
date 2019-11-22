import React from 'react'

function UserCard(props){


    return(
        <div>
           
            <p>Name: {props.fname + " " + props.lname}</p>
            <p>City: {props.city}</p>
            <p>State: {props.province}</p>
            <p>Email: {props.email}</p>
            <p>{props.board == true ? "Board Member" : null}</p>
            <p>{props.prime == true ? "Primary Admin" : null}</p>
            <p>{props.sec == true ? "Secondary Admin" : null}</p>
            <p>{props.province}</p>
           
        </div>
    )
}

export default UserCard