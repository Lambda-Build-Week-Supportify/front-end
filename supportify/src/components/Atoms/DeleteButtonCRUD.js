import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



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

function DeleteButton(){

  const deleter= () => {
    let authAxios = axiosWithAuth()
      authAxios
        .delete(``)
        .then(res => console.log("this is put res", res))
        .catch(err => console.log("this is put error", err))
  }

      const classes = useStyles();
    return(

        <Button variant="contained" color="primary" className={classes.button}>DELETE</Button>
        
    )

}


export default DeleteButton