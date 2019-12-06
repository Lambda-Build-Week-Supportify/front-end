import React, {useEffect} from 'react'
import { connect } from 'react-redux';

//LOCAL FILES
import "../25-CSS//Organisms/UserInfo.css"

import {fetchCurrentMember, fetchMembers} from "../../actions/index"

function UserInfo(props){
//who am I logged in as?
//how many schools am i watching?
//what do I look like (Stretch)
//How many issues do I have
//what are my issues statuses
//organize by some category
console.log(props.userID)
//do not do a useeffect here to fetch members, it will reset loggedUser to null


 
//   props.fetchCurrentMember(props.userID)

    
    


// let loggedUser = {}
// //loggedUser = props.members.filter(member => member.user_id === props.userID)

// loggedUser = props.fetchCurrentMember(props.userID).data
//console.log("this is loggedUser",loggedUser)
    return (
        <div className="User-info">
                
                       
                        <h1>{`${props.thisUser.first_name} ${props.thisUser.last_name}`}</h1>
                        <h2>{`Location: ${props.thisUser.city} in ${props.thisUser.state}`}</h2>
                        <p>{`Your current roles include: ${props.thisUser.board}, ${props.thisUser.primary_admin}, ${props.thisUser.sec_admin}`}</p>
             
                   

                
        </div>
    )
}



const mapDispatchToProps = {
    fetchMembers,
fetchCurrentMember
}

export default connect(state=> state, mapDispatchToProps)(UserInfo)



// <h1>{`${loggedUser.first_name} ${loggedUser.last_name}`}</h1>
// <h2>{`Location: ${loggedUser.city} in ${loggedUser.state}`}</h2>
// <p>{`Your current roles include: ${loggedUser.board}, ${loggedUser.primary_admin}, ${loggedUser.sec_admin}`}</p>
