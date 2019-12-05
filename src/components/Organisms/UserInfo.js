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

let loggedUser = {}
loggedUser = props.members.filter(member => member.user_id === props.userID)
console.log("this is loggedUser",loggedUser)
    return (
        <div className="User-info">
                
                       
                        <h1>{`${loggedUser[0].first_name} ${loggedUser[0].last_name}`}</h1>
                        <h2>{`Location: ${loggedUser[0].city} in ${loggedUser.state}`}</h2>
                        <p>{`Your current roles include: ${loggedUser[0].board}, ${loggedUser[0].primary_admin}, ${loggedUser[0].sec_admin}`}</p>
             
                   

                
        </div>
    )
}



const mapDispatchToProps = {
    fetchMembers,
fetchCurrentMember
}

export default connect(state=> state, mapDispatchToProps)(UserInfo)