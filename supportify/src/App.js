import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

import {fetchMembers, fetchSchools} from './actions'

import {connect} from 'react-redux'

//////PAGES////////
import DashboardGrid from "./components/Pages/DashboardGrid"
import GreetingPage from "./components/Pages/GreetingPage"
import UserGrid from './components/Pages/UserGrid';
import SchoolGrid from "./components/Pages/SchoolGrid"

///ORGANISMS/MODULES//////
import PrivateRoute from './components/Organisms/PrivateRoute'

///////////MOLECULES/////////////////
import CreateSchoolForm from './components/Molecules/CreateSchoolForm';
import EditSchoolForm from './components/Molecules/EditSchoolForm';
import CreateIssueForm from "./components/Molecules/CreateIssueForm"
import EditIssueForm from './components/Molecules/EditIssueForm';

/////////ATOMS/////////
import DeleteButton from "./components/Atoms/DeleteButtonCRUD"
import EditButton from './components/Atoms/EditButtonCRUD'
import SnackbarOpen from './components/Atoms/SnackbarOpen'; //this should actually be on this file!





function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
       

        <button type="button" onClick={()=> props.fetchSchools()}>Get Schools!</button>



    <Switch>
        <PrivateRoute path="/dashboard">
          <DashboardGrid />
               
        </PrivateRoute>
          <Route path="/login" component={GreetingPage}/>
          <Route component={GreetingPage}/>
    </Switch>
      <DeleteButton/>
      <EditButton/>
      <CreateSchoolForm/>
      <EditSchoolForm/>
      <CreateIssueForm/>
      <EditIssueForm/>
      <SnackbarOpen/>
      {//props.members !== [] ? <UserGrid/> : (props.offices !== [] ? <SchoolGrid/>: null)
        props.offices !== [] ? <SchoolGrid/> : null 
      }
    
    </div>
  );
}

const mapDispatchToProps ={
  fetchMembers,
  fetchSchools
}

export default connect(state=> state, mapDispatchToProps)(App);

//<button type="button" onClick={()=> props.fetchMembers()}>Get Members!</button>

// {props.error && <p>{props.error}</p>}
// {props.isFetching  && <p>This is taking a really long time!</p> }