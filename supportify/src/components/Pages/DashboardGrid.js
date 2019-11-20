//PARENT
import React, { useState, useEffect } from "react";
import axios from "axios";
import IssueCard from "../Organisms/IssueCard";
import SingleIssuePage from "../Pages/SingleIssuePage";
import { Route, Link } from "react-router-dom";
import { Container, Row } from "reactstrap";

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
  const [user, setUser] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`https://supportifyafrica.herokuapp.com/api/users/10`)
      .then(response => console.log("response", response)) //setGridState(response.data)
      .catch(error => console.log("error", error));
  }, []);

  return (
    <div>
      <Grid container className={classes.root} spacing={1}>
        {
          ///mapping over the array to create boxes///
        }

        {gridState.map((prop, index) => {
          return (
            <Box className={classes.card} boxShadow={3}>
              <Paper className={classes.paper}>
                <Link>
                  <IssueCard
                    name={prop.name}
                    email={prop.email}
                    role={prop.role}
                  />
                </Link>
                <Route />
              </Paper>
            </Box>
          );
        })}
      </Grid>
    </div>
  );
}

// For <Link> The To property is going to be dynamic, changing based on props being sent in

//The path property needs to change in the same way as the To property//}

export default DashboardGrid;
