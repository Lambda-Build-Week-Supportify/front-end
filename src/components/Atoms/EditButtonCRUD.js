import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import EditSchoolForm from '../Molecules/EditSchoolForm'
import EditIssueForm from "../Molecules/EditIssueForm"
import EditUserForm from '../Molecules/EditUserForm'



import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#CEE08F",
      color: "white",
      
    },
    input: {
      textDecoration: "none"
    },
  }));

function EditButton(props){

  // const editer= () => {
  //   let authAxios = axiosWithAuth()
  //     authAxios
  //       .put(``)
  //       .then(res => console.log("this is put res", res))
  //       .catch(err => console.log("this is put error", err))
  // }

 

    let linkPath =  props.forPage == 'school'? "/edit/school" :
(props.forPage == 'user'? "/edit/user" :(props.forPage == "issue" ? "/edit/issue" : ""))
   
 


      const classes = useStyles();
    return(
      <Link to={linkPath} className={classes.input}>
        <Button variant="contained" color="primary" className={classes.button}>EDIT</Button>
        </Link>
    )

}


export default EditButton