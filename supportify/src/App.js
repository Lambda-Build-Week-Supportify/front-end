import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

import {fetchMembers} from './actions'

import {connect} from 'react-redux'

//////PAGES////////
//import DashboardGrid from "./components/Pages/DashboardGrid"
import GreetingPage from "./components/Pages/GreetingPage"


///ORGANISMS/MODULES//////
import PrivateRoute from './components/Organisms/PrivateRoute'

/////////ATOMS/////////
import DeleteButton from "./components/Atoms/DeleteButtonCRUD"
import EditButton from './components/Atoms/EditButtonCRUD'


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
       
        <button type="button" onClick={()=> props.fetchMembers()}>Get Members!</button>
        {props.error && <p>{props.error}</p>}
        {props.isFetching  && <p>This is taking a really long time!</p> }


    <Switch>
        <PrivateRoute path="/dashboard">
          {//<DashboardGrid />
          }       
        </PrivateRoute>
          <Route path="/login" component={GreetingPage}/>
          <Route component={GreetingPage}/>
    </Switch>
      <DeleteButton/>
      <EditButton/>
    </div>
  );
}

const mapDispatchToProps ={
  fetchMembers
}

export default connect(state=> state, mapDispatchToProps)(App);
