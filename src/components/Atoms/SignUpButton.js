import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#CEE08F",
      color: "white"
    },
    input: {
      display: 'none',
    },
  }));

function SignUpButton(props){

  // const editer= () => {
  //   let authAxios = axiosWithAuth()
  //     authAxios
  //       .put(``)
  //       .then(res => console.log("this is put res", res))
  //       .catch(err => console.log("this is put error", err))
  // }

 

   
 


      const classes = useStyles();
    return(
      <Link to='/signup'>
        <Button variant="contained" color="primary" className={classes.button}>Sign Up!</Button>
        </Link>
    )

}


export default SignUpButton