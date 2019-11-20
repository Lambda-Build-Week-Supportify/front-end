import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

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

  let linkPath =  props.forPage == 'school'? "/delete/school" :
  (props.forPage == 'user'? "/delete/user" :(props.forPage == "issue" ? "/delete/issue" : ""))
     

      const classes = useStyles();
    return(
      <Link to={linkPath}>
        <Button variant="contained" color="primary" className={classes.button}>DELETE</Button>
        </Link>
    )

}


export default DeleteButton