import React from "react";


import {connect} from 'react-redux'

///////////ACTIONS
import {fetchMembers} from "../../actions"

////////////ORGANISMS
import UserCard from "../Organisms/UserCard";


////////////PAGES
import SingleUserPage from "../Pages/SingleUserPage";
import { Route, Link } from "react-router-dom";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"; //not using
import { Card } from "@material-ui/core"; //fall back plan for better styling
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    color: "blue"
  },

  control: {
    padding: theme.spacing(3)
  },
  card: {
    minWidth: 275,
    color: "red",
    margin: "10 50 10 0"
  },
  card2: {
    minWidth: 275,
    color: "red"
    // boxShadow: "3" doesnt work
  }
}));



function UserGrid(props) {

  const classes = useStyles();

  const makeCards = (e) => {
      e.preventDefault()
        props.fetchMembers()//this works on a button
  }
  console.log("this is offices", props.offices)

  return (

    <div  >
    
      <Grid container justify="center" spacing="10">
        {props.members.map(user => {
          return (
            <Grid item key={user.user_id} className={classes.card} boxShadow={3}>
                <Paper>
                <Link to={`/users/${user.user_id}`}>
                  <UserCard
                  key={user.user_id}
                  fname={user.first_name}
                  lname={user.last_name}
                  city={user.city}
                  email={user.email}
                  board={user.board}
                  prime={user.primary_admin}
                  sec={user.sec_admin}
                  province={user.state}
                  />
                </Link>
                <Route path={`/users/${user.user_id}`} render={props => 
                        <SingleUserPage data={props} userInfo={user}/>
                }/>
                </Paper>
            </Grid>
          );
        })}

      </Grid>
    </div>
  );
}

// For <Link> The To property is going to be dynamic, changing based on props being sent in

//The path property needs to change in the same way as the To property//}


const mapDispatchToProps = {
    fetchMembers
}


export default connect(state => state, mapDispatchToProps)(UserGrid);