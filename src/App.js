import React from 'react';
import './App.css';
import Movies from './Component/Movies/movies';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Customer from './Component/Customer/Customer';
import NotFound from './Component/NotFound';
import Rental from './Component/Rental';
import NavBar from './Component/Common/NavBar';
import MovieForm from './Component/Movies/MovieForm';
import Login from './Component/Login';
import Register from './Component/register';
import CreateMovie from './Component/Movies/CreateMovie';

function App() {
  return (
    <React.Fragment>
    <div className="row">
    <NavBar />
    </div>
    <div className="row">
  
<div className="container">

<Switch>
  <Route component={Movies} path="/movies"/> 
  <Route component={CreateMovie} path="/movie/create"/> 
  <Route component={CreateMovie} path="/movie/edit/:id"/> 

  <Route component={Customer} path="/customers"/> 
  <Route component ={NotFound} path="/not-found" />
  
  <Route component={Rental} path="/rental" />
  <Route component={MovieForm} path="/movie/:id" />
  <Route component={Login} path="/login" />
  <Redirect from="/" exact to="/movies" />
  <Route component={Register} to="/register" />
  <Redirect to="/not-found"/>
</Switch>

</div>
    </div>
    </React.Fragment> 
  );
}

export default App;
