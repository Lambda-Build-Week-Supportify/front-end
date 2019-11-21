//PARENT
import React from "react";

import { Route, Link } from "react-router-dom";

import UserGrid from "./UserGrid"
import SchoolGrid from "./SchoolGrid"

//Material UI
import { makeStyles } from "@material-ui/core/styles";


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
    minWidth: 275,
    color: "red",
    marginLeft: "25%"
  },
  card2: {
    minWidth: 275,
    color: "red",
    marginLeft: "15%"
    // boxShadow: "3" doesnt work
  }
}));


function Dashtest() {

  const classes = useStyles();

  return (
    <div>
    <li>
        <Link to='/dashboard/school'>School Dashboard</Link>
    </li>
    <li>
        <Link to='/dashboard/user'>Users Dashboard</Link>
    </li>
<Route path="/dashboard/school" component={SchoolGrid}/>

<Route path="/dashboard/user" component={UserGrid}/>

      
     
    </div>
  );
}

// For <Link> The To property is going to be dynamic, changing based on props being sent in

//The path property needs to change in the same way as the To property//}

export default Dashtest;
