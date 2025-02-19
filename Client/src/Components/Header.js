import React from 'react'
import './Header.css';
import HomeContent from './HomeContent.js';
import Contact  from './Contact.js';
import About  from './About.js';
import Certificates  from './Certificates.js';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
     
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <h4 className="text">Portfolio.</h4>
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
            
            <li><Link className="dropdown-item" to="https://github.com/Riya-Jain-here">Projects</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Certificates">Certificates</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
