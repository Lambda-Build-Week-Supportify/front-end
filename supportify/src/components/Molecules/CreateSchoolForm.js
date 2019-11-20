import React from 'react'
import { connect } from 'react-redux'

import {
    postSchool, 
    updateSchoolName,
    updateSchoolIssuesNum,
    updateSchoolStudentsNum,
    updateSchoolEstCosts,
    updateSchoolStreet,
    updateSchoolCity,
    updateSchoolState,
    updateSchoolPostalCode,
    updateSchoolPhoneNum,
    updateSchoolGradeLevel,
    updateSchoolDesc
} from '../../actions'

//     <label name='member-role'>Role/Position</label>
// <input type="text" name='member-role' value={props.role} onChange={handleNewRole}/>


function CreateSchoolForm(props){

    const handleNewSchoolName = e => {
        props.updateSchoolName(e.target.value)
    }

    const handleNumSchoolIssues = e => {
        props.updateSchoolIssuesNum(e.target.value)
    }

    const handleNumSchoolStudents = e => {
        props.updateSchoolStudentsNum(e.target.value)
    }

    const handleSchoolEstCosts = e => {
        props.updateSchoolEstCosts(e.target.value)
    }

    const handleSchoolStreet = e => {
        props.updateSchoolStreet(e.target.value)
    }

    const handleSchoolCity = e => {
        props.updateSchoolCity(e.target.value)
    }
    const handleSchoolState = e => {
        props.updateSchoolState(e.target.value)
    }


    const handleSchoolPostalCode = e => {
        props.updateSchoolPostalCode(e.target.value)
    }

    const handleSchoolPhoneNum = e => {
        props.updateSchoolPhoneNum(e.target.value)
    }
    const handleSchoolGradeLevel = e => {
        props.updateSchoolGradeLevel(e.target.value)
    }

    const handleSchoolDescription = e => {
        props.updateSchoolDesc(e.target.value)
    }

    return (


        <div>
           New School Form
           <form  >
                <label name='school-name' >School Name</label>
                <input type="text" name='school-name' value={props.schoolName} onChange={handleNewSchoolName}/>

                <label name='num-issues' >Number of Issues</label>
                <input type="text" name='num-issues' value={props.numIssues} onChange={handleNumSchoolIssues}/>

                <label name='num-students'>Number of Students</label>
                <input type="text" name='mnum-students' value={props.numStudents} onChange={handleNumSchoolStudents}/>

                <label name='est-cost'>Estimated Cost</label>
                <input type="text" name='est-cost' value={props.estCosts} onChange={handleSchoolEstCosts}/>
            
                <label name='school-street'>Street</label>
                <input type="text" name='school-street' value={props.schoolStreet} onChange={handleSchoolStreet}/>

                <label name='school-city'>City</label>
                <input type="text" name='school-city' value={props.schoolCity} onChange={handleSchoolCity}/>

                <label name='school-state'>State</label>
                <input type="text" name='school-state' value={props.schoolState} onChange={handleSchoolState}/>

                <label name='postal-code'>Postal</label>
                <input type="text" name='postal-code' value={props.postCode} onChange={handleSchoolPostalCode}/>

                <label name='phone-number'>Phone Number</label>
                <input type="type" name='phone-number' value={props.phoneNumber} onChange={handleSchoolPhoneNum}/>

                <label name='grade-level'>Grade Level</label>
                <input type="type" name='grade-level' value={props.gradeLevel} onChange={handleSchoolGradeLevel}/>

                <label name='description'>Description</label>
                <input type="type" name='description' value={props.description} onChange={handleSchoolDescription}/>
           

                <button type="button" onClick={()=> props.postSchool(
                    props.schoolName,
                    props.numIssues,
                    props.numStudents,
                    props.estCosts,
                    props.schoolStreet,
                    props.schoolCity,
                    props.schoolState,
                    props.postCode,
                    props.phoneNumber,
                    props.gradeLevel,
                    props.description
                )}>Make a School!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    postSchool,
    updateSchoolName,
    updateSchoolIssuesNum,
    updateSchoolStudentsNum,
    updateSchoolEstCosts,
    updateSchoolStreet,
    updateSchoolCity,
    updateSchoolState,
    updateSchoolPostalCode,
    updateSchoolPhoneNum,
    updateSchoolGradeLevel,
    updateSchoolDesc
}

export default connect(state => state, mapDispatchToProps)(CreateSchoolForm)

