import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

function DeleteButton(){

      const classes = useStyles();
    return(

        <Button variant="contained" color="secondary" className={classes.button}></Button>
        
    )

}


export default DeleteButton