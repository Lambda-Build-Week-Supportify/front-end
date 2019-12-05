import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";

import { fetchMembers, fetchSchools } from "./actions";

import { connect } from "react-redux";

//////PAGES////////
import SingleSchoolPage from './components/Pages/SingleSchoolPage';
import SingleUserPage from './components/Pages/SingleUserPage';
import IssuePage from "./components/Pages/IssuePage"

import DashTest from './components/Pages/DashTest'
import DashboardGrid from "./components/Pages/DashboardGrid";
import GreetingPage from "./components/Pages/GreetingPage";
import UserGrid from "./components/Pages/UserGrid";
import SchoolGrid from "./components/Pages/SchoolGrid";
import IssueGrid from "./components/Pages/IssueGrid";

///ORGANISMS/MODULES//////
import PrivateRoute from "./components/Organisms/PrivateRoute";
import SignUp from './components/Organisms/SignUp'
import UserInfo from "./components/Organisms/UserInfo";
///////////MOLECULES/////////////////
import CreateSchoolForm from "./components/Molecules/CreateSchoolForm";
import EditSchoolForm from "./components/Molecules/EditSchoolForm";
import CreateIssueForm from "./components/Molecules/CreateIssueForm";
import EditIssueForm from "./components/Molecules/EditIssueForm";
import EditUserForm from './components/Molecules/EditUserForm'
import UserSchoolList from "./components/Molecules/UserSchoolList";

/////////ATOMS/////////
import SignUpButton from './components/Atoms/SignUpButton'



import DeleteButton from "./components/Atoms/DeleteButtonCRUD";
import EditButton from "./components/Atoms/EditButtonCRUD";
import SnackbarOpen from "./components/Atoms/SnackbarOpen"; //this should actually be on this file!




function App(props) {
  return (
    <div className="App" style={{backgroundColor:"#D03840", minHeight: "100vh"}}>
   
      <ul className="App-header" style={{position:"fixed"}}>
          
            <Link to="/login" style={{color: "#000000", textDecoration: "none"}}>Login</Link>
         

         
            <Link to='/dashtest' style={{color: "#000000", textDecoration: "none"}}>Real Dashboard</Link>
         
        </ul>
       
<div className="Align-as-row" style={{marginTop: "10vh"}}>
    

    <Switch  >
          <PrivateRoute path='/dashtest' >
         
            <DashTest/>
          </PrivateRoute>
          <PrivateRoute path="/edit/school" >
         
              <EditSchoolForm/>
          </PrivateRoute>
          <PrivateRoute path="/edit/user" >
         
              <EditUserForm/>
          </PrivateRoute>
          <PrivateRoute path="/edit/issue" >
         
          <EditIssueForm/>
      </PrivateRoute>
          <PrivateRoute path="/create/issue" >
         
            <CreateIssueForm/>
          </PrivateRoute>
          <PrivateRoute path="/delete/school">
                <DeleteButton/> 
                  
          </PrivateRoute>
          <PrivateRoute path={`/schools/:id`} > 
         
              <SingleSchoolPage/> 
          </PrivateRoute>
          <PrivateRoute path={`/users/:id`} >
         
              <SingleUserPage/>     
          </PrivateRoute>
          <PrivateRoute path={`/issues/:id`} >
         
          <IssuePage/>     
      </PrivateRoute>
          <PrivateRoute path={`/users-schools`} >
         
               <UserSchoolList name={props.singleUser.first_name} schoolList={props.userOwned}/>     
          </PrivateRoute>


          <Route path="/dashboard/school"  component={SchoolGrid}/>

          <Route path="/dashboard/user"  component={UserGrid}/>

          <Route path='/dashboard/issue'  component={IssueGrid}/>


          <Route path="/dashboard"  component={DashboardGrid}/>

          <Route path={`/signup`} component={SignUp}/>
              
         
          <Route path="/login" component={GreetingPage}/>
          <Route component={GreetingPage}/>
    </Switch>

    </div>

   
    </div>
  );
}

const mapDispatchToProps = {
  fetchMembers,
  fetchSchools
};

export default connect(state => state, mapDispatchToProps)(App);

//<button type="button" onClick={()=> props.fetchMembers()}>Get Members!</button>

// {props.error && <p>{props.error}</p>}
// {props.isFetching  && <p>This is taking a really long time!</p> }

// {props.members !== [] ? <UserGrid/> : (props.offices !== [] ? <SchoolGrid/>: null)
//   //props.offices !== [] ? <SchoolGrid/> : null 
// }




// <Route path={`/schools/${props.id}`} component={
//   SingleSchoolPage 

 
// }/>



// <CreateSchoolForm/>

// <CreateIssueForm/>
// <EditIssueForm/>
// <SnackbarOpen/>


// <PrivateRoute path="/dashboard">
// <DashboardGrid />
//      <p>Hello</p>
// </PrivateRoute>