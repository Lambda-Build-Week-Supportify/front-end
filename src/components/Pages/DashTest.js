//PARENT
import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import UserInfo from "../Organisms/UserInfo";

import UserGrid from "./UserGrid"
import SchoolGrid from "./SchoolGrid"

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Card, FormHelperText } from "@material-ui/core"; 
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


//material ui
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    color: "blue"
  },

  control: {
    padding: theme.spacing(2)
  },
  card: {
   fontSize: "10vh",
   //maxWidth: "30vw",
   marginLeft: "40vw",
   marginTop: "10vh",
    backgroundColor: "none",
    textDecoration: "none"
  },
  card2: {
    fontSize: "20vh",
    fontFamily: "Roboto, sans-serif",
     color: "#DDDDDD",
     marginRight: "5vw",
     marginBottom: "5vw",
    textDecoration: "none"

  }
}));


function Dashtest() {

  const classes = useStyles();

  return (

    <div>
    <UserInfo/>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
    <Link className={classes.card} to='/dashboard/school'>
    
          <Card className={classes.card2}>
          Schools
            <CardHeader className={classes.card2}>
        
                <CardContent className={classes.card2}>
                
                      <Typography variant="h5" className={classes.card2}  component="h1">
                      Schools
                      </Typography>
                  </CardContent>
              </CardHeader> 
            </Card>
        </Link>
    


        <Link className={classes.card} to='/dashboard/user'>
        <Card className={classes.card2}>
        Users
          <CardHeader className={classes.card2}>
      
              <CardContent className={classes.card2}>
              
                    <Typography variant="h5" className={classes.card2}  component="h1">
                    Users
                    </Typography>
                </CardContent>
            </CardHeader> 
          </Card>
      </Link>
    
    <Link className={classes.card} to='/dashboard/issue' >
    <Card className={classes.card2}>
    Issues
      <CardHeader className={classes.card2}>
  
          <CardContent className={classes.card2}>
          
                <Typography variant="h5" className={classes.card2}  component="h1">
                Issues
                </Typography>
            </CardContent>
        </CardHeader> 
      </Card>
  </Link>

  </div>
    </div>
  );
}

// For <Link> The To property is going to be dynamic, changing based on props being sent in

//The path property needs to change in the same way as the To property//}

export default Dashtest;




///////REMOVING SKYE'S WORK
// <li>
// <Link to='/dashboard' >Dashboard</Link>
// </li>