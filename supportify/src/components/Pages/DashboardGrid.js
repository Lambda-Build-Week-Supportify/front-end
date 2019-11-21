//PARENT
import React, { useState, useEffect } from "react";
import axios from "axios";
import IssueCard from "../Organisms/IssueCard";
import SingleIssuePage from "../Pages/SingleIssuePage";
import { Route, Link } from "react-router-dom";
import IssuesForm from "../Organisms/IssuesForm";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"; //not using
import { Card } from "@material-ui/core"; //fall back plan for better styling
import Box from "@material-ui/core/Box";

//GET takes response and makes it state
//here we map over our data array and create a IssueCard for each object in that array
//pass props while mapping

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

const temporaryState = [
  //delete later
  { id: 1, object: "friendly" },
  { id: 2, object: "unfriendly" },
  { id: 3, object: "neutral" }
];

//functional component- export it

function DashboardGrid() {
  const [gridState, setGridState] = useState([]);
  const [issue, setIssue] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`https://supportifyafrica.herokuapp.com/api/issues`)
      .then(response =>
        // console.log("response", response.data)
        setGridState(response.data)
      )
      .catch(error => console.log("error", error));
  }, []);
  console.log(gridState);
  return (
    <div>
      <Grid container className={classes.root} spacing={1}>
        {
          ///mapping over the array to create boxes///
        }
        <h1>Hello From DashboardGrid</h1>
        {gridState.map((prop, index) => {
          return (
            <div>
              <div>
                <IssuesForm />
              </div>
              <Box className={classes.card} boxShadow={3}>
                <Paper className={classes.paper}>
                  <Link>
                    <IssueCard
                      complete={prop.completed}
                      discription={prop.description}
                      equitment={prop.equipment}
                      cost={prop.estimated_cost}
                      issues={prop.general_issues}
                      idIssues={prop.issues_id}
                      needsAttention={prop.needs_attention}
                      priority={prop.priority}
                      scheduled={prop.scheduled}
                      title={prop.title}
                      id={prop.user_id}
                    />
                  </Link>
                  <Route />
                </Paper>
              </Box>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

// For <Link> The To property is going to be dynamic, changing based on props being sent in

//The path property needs to change in the same way as the To property//}

export default DashboardGrid;
