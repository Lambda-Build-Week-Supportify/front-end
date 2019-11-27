import React from 'react'

function SingleIssueCard(props){


 

    return(
        <div>
            <p>Title: {props.title}</p>
            <p>Priority: {props.priority}</p>
            <p>Description: {props.description}</p>
            <p>Equipment: {props.equipment}</p>
            <p>General Issues: {props.general_issues}</p>
            <p>Estimated Costs: {props.estimated_cost}</p>
            <p>{props.completed == true ? "Completed" : null}</p>
            <p>{props.needs_attention == true ? "Needs Attention" : null}</p>
            <p>{props.scheduled == true ? "Scheduled" : null}</p>


           
        </div>
    )
}

export default SingleIssueCard