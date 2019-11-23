import React, {useEffect} from "react";


import {connect} from 'react-redux'

///////////ACTIONS
import {fetchSchools, specifyId, fetchMembers, singleSchoolStateMaker} from "../../actions"

////////////ORGANISMS
import SchoolCard from "../Organisms/SchoolCard";


////////////PAGES
import SingleSchoolPage from "./SingleSchoolPage";
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



function SchoolGrid(props) { ///////////////COMPONENT/////////////////////

  const classes = useStyles();

console.log("this is offices", props.offices)
console.log("This is userID", props.userID)

// const handleClick = (data) => {
 
//     props.specifyId(data)}

  
console.log("this is props.id on grid", props.id)

const storeClick = (office) => {
    props.singleSchoolStateMaker(      
        office.school_name,
        office.num_issues,
        office.num_students,
        office.est_costs,
        office.school_street,
        office.school_city,
        office.school_state,
        office.post_code,
        office.phone,
        office.grade_level,
        office.about,
        office.id)
        console.log("this is school city out map", office.school_city)
    props.specifyId(office.school_id)
}


useEffect(()=>{
  props.fetchSchools()


},[])

  return (

    <div style={{backgroundColor:"#FDC543"}}>

      <Grid container justify="center" spacing="10">
        {props.offices.map(office => {
          return (
            <Grid item key={office.school_id} className={classes.card} boxShadow={3}>
                <Paper className={classes.card2}>
                <Link to={`/schools/${office.school_id}`} onClick={() =>storeClick(office)}>
                  <SchoolCard
                    key={office.school_id}
                    school_name={office.school_name}
                    num_issues={office.num_issues}
                    num_students={office.num_students}
                    est_costs={office.est_costs}
                    school_street={office.school_street}
                    school_city={office.school_city}
                    school_state={office.school_state}
                    post_code={office.post_code}
                    phone={office.phone}
                    grade_level={office.grade_level}
                    about={office.about}
                    id={office.school_id}
                    
                  />
                  {console.log("this is school city in map", office.school_city)}
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
    fetchSchools,
    specifyId,
    fetchMembers,
    singleSchoolStateMaker
}


export default connect(state => state, mapDispatchToProps)(SchoolGrid);

//<button type="button" onClick={()=> props.fetchSchools()}>Get Schools!</button>
