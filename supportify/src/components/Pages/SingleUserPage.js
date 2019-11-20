import React from 'react'

function SingleUserPage(props){


    return(
        <div>
           
            <p>{props.fname}</p>
            <p>{props.lname}</p>
            <p>{props.city}</p>
            <p>{props.email}</p>
            <p>{props.board}</p>
            <p>{props.prime}</p>
            <p>{props.sec}</p>
            <p>{props.province}</p>
           
        </div>
    )
}

export default SingleUserPage