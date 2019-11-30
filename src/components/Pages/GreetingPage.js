import React, {useState} from 'react'
import "../25-CSS/Pages/GreetingPage.css"

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
      marginTop: "5vh",
      display: "flex",
      justifyContent: "space-around",
      alignContent: "center",
      maxWidth: "100vw"
    },
     paper: {
        color: "#FFFFFF",
        backgroundColor: "#FCB614",
        padding: "30px",
        marginTop: "30px",
        minWidth: 475,
        borderRadius: 15,
        fontFamily: "Roboto, sans-serif",
        fontWeight: 600,
     },
    
    control: {
      padding: theme.spacing(2),
    
    },
  card: {
    minWidth: 275,
    backgroundColor: "#FCB614",
     //marginLeft: "10%",
    marginRight: 0,
    maxHeight: "10px",
    padding: "0px"
  },
  card2:{
    minWidth: 275,
    backgroundColor: "#FDC543",
    marginTop: "30px",
    padding: "30px",

    // boxShadow: "3" doesnt work
  }
}
  ));

 function GreetingPage(props){
  
      const classes = useStyles();

    return (


        <div className="Greeting-page">

            <Grid container className={classes.root}  spacing={1}>
                    
                            <Paper className={classes.paper}>
                                
                                    Ghana Admin
                                    <Login {...props} status={true} greetName="username"
                                    passName="password"/>
                               
                            </Paper>
                   
                       
                      
                            <Paper className={classes.paper} boxShadow={3}>
                                
                                    US Boardmember
                                    <Login {...props} status={false} greetName="boardname" passName="passwordBoard"/>
                          
                            </Paper>
                     
                     <SignUpButton/>
              
            </Grid>

            
            
            
               
        </div>
    )
}

const mapDispatchToProps = {
    adminToFalse
}

export default connect(state => state, mapDispatchToProps)(GreetingPage)


//<Box className={classes.card} boxShadow={3}> </Box>  
//<Box className={classes.card2} > 