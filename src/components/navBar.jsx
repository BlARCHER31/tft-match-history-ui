import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink to='/' className="navbar-brand" >TeamFight Tactics</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/summoner/stats' className="nav-link active" aria-current="page" >Summoner Stats</Link>
          </li>
          
          <li className="nav-item">
            <Link to='/champions' className="nav-link" >Champions</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
