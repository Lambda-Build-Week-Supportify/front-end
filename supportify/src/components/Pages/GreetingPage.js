import React, {useState} from 'react'


////////////ORGANISMS
import Login from '../Organisms/Login'
import SignUp from '../Organisms/SignUp'


///////////////MATERIAL UI///////////////
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
     paper: {
        color: "blue",
        
     },
    
    control: {
      padding: theme.spacing(2),
    
    },
  card: {
    minWidth: 275,
    color: "red",
    marginLeft: "25%"
  },
  card2:{
    minWidth: 275,
    color: "red",
    marginLeft: "15%",
    // boxShadow: "3"doesnt work
  }
}
  ));

export default function GreetingPage(){
  
      const classes = useStyles();


    return (


        <div>
            <header>
                    Header
            </header>
            <Grid container className={classes.root}  spacing={1}>
                    <Box className={classes.card} boxShadow={3}>
                            <Paper className={classes.paper}>
                                
                                    Ghana Admin
                                    <Login/>
                               
                            </Paper>
                    </Box>  
                       
                    <Box className={classes.card2} >   
                            <Paper className={classes.paper} boxShadow={3}>
                                
                                    US Boardmember
                                    <Login/>
                               
                            </Paper>
                     </Box> 
                   
              
            </Grid>
                <SignUp/>
            
        </div>
    )
}