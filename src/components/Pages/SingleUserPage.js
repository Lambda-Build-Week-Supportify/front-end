import React, { useEffect } from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import {specifyId, setMemberSchools, fetchMemberSchools} from "../../actions"
import EditButton from '../Atoms/EditButtonCRUD'
import DeleteButton from "../Atoms/DeleteButtonCRUD"

import UserSchoolList from '../Molecules/UserSchoolList'

function SingleUserPage(props){
    
    //console.log("this is the id", props.id)
    // let schoolList = props.userOwned > 0 ? props.userOwned.map(school => <p>{school.school_name}</p>) : null

    // let schoolList = props.userOwned

    // const createArray = (data) => {
    //     return <UserSchoolList schoolList={data}/>
    // }


//  useEffect(()=>{
//     createArray()
//     }, [props.userOwned])

   

    console.log("this is schoolList", props.userOwned)

    

    // console.log("this is schoollist 2", schoolList)

    return(
        <div>
          
           <EditButton forPage={'user'} formId={props.singleUser.id}/>
            <p>Name: {props.singleUser.first_name + " " + props.singleUser.last_name}</p>
            <p>City: {props.singleUser.city}</p>
            <p>State: {props.singleUser.state}</p>
            <p>Email: {props.singleUser.email}</p>
            <p>{props.singleUser.board == true ? "Board Member" : null}</p>
            <p>{props.singleUser.prime == true ? "Primary Admin" : null}</p>
            <p>{props.singleUser.sec == true ? "Secondary Admin" : null}</p>
            <DeleteButton forPage={'user'} />
           
            <p> This Member is associated with the following schools:</p>
            <Link to="/users-schools">
            User's Schools
             </Link>
          
        </div>
    )
}

const mapDispatchToProps ={
    specifyId,
    setMemberSchools,
    fetchMemberSchools
}

export default connect(state => state, mapDispatchToProps)(SingleUserPage)

//data accesses Route props


//{props.userOwned === props.id}