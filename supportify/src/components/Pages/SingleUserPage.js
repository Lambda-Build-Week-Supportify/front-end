import React from 'react'

function SingleUserPage({data, userInfo}){


    return(
        <div>
           
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

export default SingleUserPage

//data accesses Route props