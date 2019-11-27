import React from 'react'

import {connect} from 'react-redux'

import {specifyId} from "../../actions"


import EditButton from '../Atoms/EditButtonCRUD'
import DeleteButton from '../Atoms/DeleteButtonCRUD'

function IssuePage(props){

//console.log("this is school page props", schoolInfo)

//console.log("this is super id", superId) // synced with card click!! now I can use this to edit or delete the proper pages
    return(
        <div>
            <EditButton forPage={"issue"} />
            <p>Title: {props.title}</p>
            <p>Priority: {props.priority}</p>
            <p>Description: {props.description_issue}</p>
            <p>Equipment: {props.equipment}</p>
            <p>General Issues: {props.general_issues}</p>
            <p>Estimated Costs: {props.estimated_cost}</p>
            <p>{props.completed == true ? "Completed" : null}</p>
            <p>{props.needs_attention == true ? "Needs Attention" : null}</p>
            <p>{props.scheduled == true ? "Scheduled" : null}</p>
            <DeleteButton forPage={'issue'}/>
        </div>
    )
}

const mapDispatchToProps ={
    specifyId
}



export default connect(state => state, mapDispatchToProps)(IssuePage)