import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



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

function EditButton(){

      const classes = useStyles();
    return(

        <Button variant="contained" color="primary" className={classes.button}>EDIT</Button>
        
    )

}


export default EditButton