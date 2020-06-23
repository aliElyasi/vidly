import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
const NavBar = () => {
    return (

<nav style={{width:'100%'}} className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Vidly</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/not-found">not found</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">customers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rental">rental</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Register">Register</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
      );
}
 
export default NavBar;