import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import {connect} from "react-redux"

import {  
  postMemberSchool
} from '../../actions'

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#FFFFFF",
      color: "white"
    },
    input: {
      display: 'none',
    },
  }));

function AddButton(props){

      const classes = useStyles();
    return(
      <Link to="/dashboard/school">
        <Button variant="contained" color="secondary" className={classes.button} onClick={() => props.postMemberSchool(props.userID, props.id)}>ADD SCHOOL</Button>
        </Link>
    )

}


const mapDispatchToProps = {
    postMemberSchool
}

export default connect(state =>  state, mapDispatchToProps)(AddButton)