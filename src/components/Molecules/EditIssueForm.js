import React from 'react'
import { connect } from 'react-redux'

import { Link } from "react-router-dom";

import {
    putIssue, 
    updateIssuePriority,
    updateIssueTitle,
    updateIssueDesc,
    updateIssueEquip,
    updateIssueGeneral,
    updateIssueCosts,
    updateIssueCompletion,
    updateIssueAttention,
    updateIssueSchedule
} from '../../actions'


function EditIssueForm(props){

    const handleNewIssuePriority = e => {
        props.updateIssuePriority(e.target.value)
    }

    const handleNewIssueTitle = e => {
        props.updateIssueTitle(e.target.value)
    }

    const handleNewIssueDesc = e => {
        props.updateIssueDesc(e.target.value)
    }

    const handleNewIssueEquip = e => {
        props.updateIssueEquip(e.target.value)
    }

    const handleIssueGen = e => {
        props.updateIssueGeneral(e.target.value)
    }

    const handleNewIssueCosts = e => {
        props.updateIssueCosts(e.target.value)
    }
    // const handleCompletedIssue = e => {

    //     let issueStatusChange = e.target.name === 'needs-attention' ? props.updateIssueAttention : (e.target.name === 'scheduled' ? props.updateIssueSchedule : props.updateIssueCompletion)

    //     issueStatusChange()
 
    // }

    const handleCompletedIssue = e => {
    props.updateIssueCompletion()
    }

    const handleScheduleIssue = e => {
        props.updateIssueSchedule()
    }

    const handleAttentionIssue = e => {
        props.updateIssueAttention()
    }



    return (


        <div>
           Edit Issue Form
           <form  >
                <label name='issue-priority' >Priority</label>
                <input type="text" name='issue-priority' value={props.priority} onChange={handleNewIssuePriority}/>

                <label name='issue-title' >Title</label>
                <input type="text" name='issue-title' value={props.title} onChange={handleNewIssueTitle}/>

                <label name='issue-desc'>Description</label>
                <input type="text" name='issue-desc' value={props.description_issue} onChange={handleNewIssueDesc}/>

                <label name='equip'>Equipment</label>
                <input type="text" name='equip' value={props.equipment} onChange={handleNewIssueEquip}/>
            
                <label name='general-issues'>General Issues</label>
                <input type="text" name='general-issues' value={props.general_issues} onChange={handleIssueGen}/>

                <label name='issue-costs'>Issue Costs</label>
                <input type="text" name='issue-costs' value={props.estimated_cost} onChange={handleNewIssueCosts}/>
 
                <label name='needs-attention' >Needs Attention</label>
                <input type="checkbox" name='needs-attention'  onClick={handleAttentionIssue}/>

                <label name='scheduled' >Scheduled</label>
                <input type="checkbox" name='scheduled' onClick={handleScheduleIssue}/>

                <label name='completed' >Completed</label>
                <input type="checkbox" name='completed'  onClick={handleCompletedIssue}/>


                <Link to="/dashboard">
                <button type="button" onClick={()=> props.putIssue(
                    props.priority,
                    props.title,
                    props.description_issue,
                    props.equipment,
                    props.general_issues,
                    props.estimated_cost,
                    props.completed,
                    props.needs_attention,
                    props.scheduled,
                    props.id
                )}>Edit an Issue</button>
                </Link>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    putIssue, 
    updateIssuePriority,
    updateIssueTitle,
    updateIssueDesc,
    updateIssueEquip,
    updateIssueGeneral,
    updateIssueCosts,
    updateIssueCompletion,
    updateIssueAttention,
    updateIssueSchedule
}

export default connect(state => state, mapDispatchToProps)(EditIssueForm)

//This form is linked to the input fields of the edit form, THEY SHOULD NEVER DISPLAY AT THE SAME TIME!!!


//TYPO IN PUT, description is discription on backend, also equipment is equitment