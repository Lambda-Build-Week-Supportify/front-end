import React, {useEffect} from "react";


import {connect} from 'react-redux'

///////////ACTIONS
import {fetchIssues, specifyId, singleIssueStateMaker, updateResetState} from "../../actions"

//////////ATOMS
import CreateButton from "../Atoms/CreateButtonCRUD";

////////////ORGANISMS
import SingleIssueCard from "../Organisms/SingleIssueCard";


////////////PAGES
//import SingleSchoolPage from "./SingleSchoolPage";
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
    margin: "10 50 10 0",
    
  },
  card2: {
    color: "red",
    padding: "15%"
    // boxShadow: "3" doesnt work
  }
}));



function IssueGrid(props) { ///////////////COMPONENT/////////////////////

  const classes = useStyles();

console.log("this is issues", props.issues)
console.log("This is userID", props.userID)

// const handleClick = (data) => {
 
//     props.specifyId(data)}

  
console.log("this is props.id on grid", props.id)

const storeClick = (issue) => {
    props.singleIssueStateMaker(      
        issue.title,
        issue.priority,
        issue.description,
        issue.equipment,
        issue.general_issues,
        issue.estimated_cost,
        issue.completed,
        issue.needs_attention,
        issue.scheduled)

    props.specifyId(issue.issues_id)
}


useEffect(()=>{
  props.fetchIssues()
  props.updateResetState()
},[])

  return (

    <div style={{backgroundColor:"#FDC543"}}>
        <CreateButton/>
      <Grid container justify="center" spacing="10">
        {props.issues.map(issue => {
          return (
            <Grid item key={issue.issues_id} className={classes.card} boxShadow={3}>
                <Paper className={classes.card2}>
                <Link to={`/issues/${issue.issues_id}`} onClick={() =>storeClick(issue)}>
                  <SingleIssueCard
                    key={issue.issues_id}
                    title={issue.title}
                    priority={issue.priority}
                    description={issue.description}
                    equipment={issue.equipment}
                    general_issues={issue.general_issues}
                    estimated_cost={issue.estimated_cost}
                    completed={issue.completed}
                    needs_attention={issue.needs_attention}
                    scheduled={issue.scheduled}
                    
                  />
                  {console.log("this is school city in map", issue.school_city)}
                </Link>
                
     
                
               
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
    fetchIssues,
    specifyId,
    singleIssueStateMaker,
    updateResetState
}


export default connect(state => state, mapDispatchToProps)(IssueGrid);


