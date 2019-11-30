import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#25408F",
      color: "white",
      padding: "1vw 4vw",
      fontSize: "1.2vw",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
    },
    input: {
      display: 'none',
    },
    link: {
      textDecoration: "none",
      width: "100%"
    }
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
      <Link to='/signup' className={classes.link}>
        <Button variant="contained" color="secondary" className={classes.button}>Sign Up!</Button>
        </Link>
    )

}


export default SignUpButton