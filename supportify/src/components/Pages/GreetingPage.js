import React, {useState} from 'react'

import {connect} from 'react-redux'

import {adminToFalse} from '../../actions'

////////////ORGANISMS
import Login from '../Organisms/Login'

import EditUserForm from '../Molecules/EditUserForm'


//////////////ATOMS
import SignUpButton from '../Atoms/SignUpButton'

///////////////MATERIAL UI///////////////
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'; //not using
import { Card } from '@material-ui/core'; //fall back plan for better styling
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
    // boxShadow: "3" doesnt work
  }
}
  ));

 function GreetingPage(props){
  
      const classes = useStyles();




    return (


        <div>
            <header>
            <SignUpButton/>
            </header>
            <Grid container className={classes.root}  spacing={1}>
                    <Box className={classes.card} boxShadow={3}>
                            <Paper className={classes.paper}>
                                
                                    Ghana Admin
                                    <Login {...props} status={true} greetName="username"
                                    passName="password"/>
                               
                            </Paper>
                    </Box>  
                       
                    <Box className={classes.card2} >   
                            <Paper className={classes.paper} boxShadow={3}>
                                
                                    US Boardmember
                                    <Login {...props} status={false} greetName="boardname" passName="passwordBoard"/>
                          
                            </Paper>
                     </Box> 
                   
              
            </Grid>
              
               
        </div>
    )
}

const mapDispatchToProps = {
    adminToFalse
}

export default connect(state => state, mapDispatchToProps)(GreetingPage)