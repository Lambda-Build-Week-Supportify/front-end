import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import {connect} from "react-redux"

import {  deleteMember,
  deleteSchool,
  deleteIssue} from '../../actions'

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
  (props.forPage == 'user'? props.deleteMember(props.id)  :(props.forPage == "issue" ? props.deleteIssue(props.id) : ""))
     
console.log("THIS IS THE ID YOU ARE USING TO DELETE", props.id)
      const classes = useStyles();
    return(
     
        <Button variant="contained" color="primary" className={classes.button} onClick={() => handleClick}>DELETE</Button>
  
    )

}

const mapDispatchToProps ={
  deleteMember,
  deleteSchool,
  deleteIssue
}

export default connect(state=> state, mapDispatchToProps)(DeleteButton)