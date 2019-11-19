import React from 'react'
import axios from 'axios'
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

      const classes = useStyles();
    return(

        <Button variant="contained" color="primary" className={classes.button}>DELETE</Button>
        
    )

}


export default DeleteButton