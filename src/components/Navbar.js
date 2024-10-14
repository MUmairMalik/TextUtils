import React from 'react'//rfc
import PropTypes from 'prop-types' //impt
import { Link } from 'react-router-dom'



export default function  Navbar(props) {
  return (
    
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.facility}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Route Plan</a></li>
            <li><a className="dropdown-item" href="/">FBO Details</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Fuel Provider Details</a></li>
          </ul>
        </li>
      
      </ul>
        <div className="form-check form-switch data-bs-theme={props.mode}">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Switch Mode</label>
        </div>  
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Airport" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes= {
    title: PropTypes.string,//pts
    //title: PropTypes.string.isRequired, // prop value required
    facility: PropTypes.string
}
