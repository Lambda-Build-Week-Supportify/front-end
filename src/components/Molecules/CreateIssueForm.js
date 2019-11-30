import React from 'react'
import { connect } from 'react-redux'

import '../25-CSS/Molecules/Forms.css'

import {
    postIssue, 
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


import {Link} from 'react-router-dom'

function CreateIssueForm(props){

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
    const handleIssueCompletion = e => {
        
        let statusChange = e.target.name === 'issue-attention' ? props.updateIssueAttention : ((e.target.name === 'issue-scheduled') ? props.updateIssueSchedule : props.updateIssueCompletion)

       return statusChange()
    }



    return (


        <div className="create-issue">
           
           <form className="create-issue-form" >
           Create Issue
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

                <label name='issue-attention'>Needs Attention</label>
                <input type="checkbox" name='issue-attention' value={props.completed} onChange={handleIssueCompletion}/>

                <label name='issue-scheduled'>Scheduled</label>
                <input type="checkbox" name='issue-scheduled' value={props.completed} onChange={handleIssueCompletion}/>

                <label name='issue-completion'>Complete</label>
                <input type="checkbox" name='issue-completion' value={props.completed} onChange={handleIssueCompletion}/>

                <Link to='/dashboard' >
                <button type="button" onClick={()=> props.postIssue(
                    props.priority,
                    props.title,
                    props.description_issue,
                    props.equipment,
                    props.general_issues,
                    props.estimated_cost,
                    props.completed,
                    props.needs_attention,
                    props.scheduled,
                    props.userID
                )}>Report an Issue</button>
                </Link>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    postIssue, 
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

export default connect(state => state, mapDispatchToProps)(CreateIssueForm)

//This form is linked to the input fields of the edit form, THEY SHOULD NEVER DISPLAY AT THE SAME TIME!!!
