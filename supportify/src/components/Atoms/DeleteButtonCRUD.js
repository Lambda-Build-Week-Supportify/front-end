import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import { Link } from "react-router-dom";

import {connect} from "react-redux"

import {  deleteMember,
  deleteSchool,
  deleteIssue,
  fetchSchools,
  fetchMembers,
  fetchIssues
} from '../../actions'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#D03840",
      color: "white"
    },
    input: {
      display: 'none',
    },
  }));

function DeleteButton(props){

  let handleClick =  props.forPage == 'school'? props.deleteSchool(props.id) :
  (props.forPage == 'user'? props.deleteMember(props.id) : (props.forPage == "issue" ? props.deleteIssue(props.id) : ""))
     

  // let handleClick2nd =  props.forPage == 'school'? props.fetchSchools(props.id) :
  // (props.forPage == 'user'? props.fetchMembers(props.id) : (props.forPage == "issue" ? props.fetchIssues(props.id) : ""))
  
  let linkPath =  props.forPage == 'school'? '/dashboard/school' :
  (props.forPage == 'user'? '/dashboard/user' :(props.forPage == "issue" ? '/dashboard' : ""))
     
console.log("THIS IS THE ID YOU ARE USING TO DELETE", props.id)
      const classes = useStyles();
    return(
      <Link to={linkPath} >
        <Button variant="contained" color="primary" className={classes.button} onClick={() => handleClick}>DELETE</Button>
      </Link>
    )

}

const mapDispatchToProps ={
  deleteMember,
  deleteSchool,
  deleteIssue,
  fetchSchools,
  fetchMembers,
  fetchIssues
}

export default connect(state=> state, mapDispatchToProps)(DeleteButton)