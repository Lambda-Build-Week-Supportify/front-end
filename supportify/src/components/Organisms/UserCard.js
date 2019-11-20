import React from 'react'

function UserCard(props){


    return(
        <div>
           
            <p>{props.fname}</p>
            <p>{props.lname}</p>
            <p>{props.city}</p>
            <p>{props.email}</p>
            <p>{props.board == true ? "Board Member" : null}</p>
            <p>{props.prime == true ? "Primary Admin" : null}</p>
            <p>{props.sec == true ? "Secondary Admin" : null}</p>
            <p>{props.province}</p>
           
        </div>
    )
}

export default UserCard