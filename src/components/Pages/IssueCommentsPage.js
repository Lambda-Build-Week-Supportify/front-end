import React, {useEffect} from 'react'

import {connect} from 'react-redux'


import {fetchComments} from "../../actions"

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

function IssueCommentsPage(props){
 const classes = useStyles()




    useEffect(()=>{

        props.fetchComments(props.id)
    }, [, props.shouldReload])


    return (
        <div>
        {console.log("comments on single page", props.comments)}
                {props.comments.map(comment => {
                    return  <Paper key={comment.comment_id} className={classes.card2}>
                                <p>{comment.comment}</p>
                             </Paper>
                })}
        </div>
    )
}


const mapDispatchToProps ={
    fetchComments
}


export default connect(state => state, mapDispatchToProps)(IssueCommentsPage)