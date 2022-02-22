import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Page from './components/Page'

import NavComponent from './components/Nav'
import { setListPeople, setListPlanets, setListStarships, setListVehicles, setListFilms } from './Functions';

ReactDOM.render(
  <Router>
    <div>
      <NavComponent></NavComponent>
      <Switch>
        <Route exact path="/" component={(props) => <Page func={setListPeople} entityName='people'/>}></Route>
        <Route path="/people" component={(props) => <Page func={setListPeople} entityName='people'/>}></Route>
        <Route path="/films" component={(props) => <Page func={setListFilms} entityName='films'/>}></Route>
        <Route path="/planets" component={(props) => <Page func={setListPlanets} entityName='planets'/>}></Route>
        <Route path="/starships" component={(props) => <Page func={setListStarships} entityName='starships'/>}></Route>
        <Route path="/vehicles" component={(props) => <Page func={setListVehicles} entityName='vehicles'/>}></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);



