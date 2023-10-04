import React from 'react';
import logo from '../navbar/logo-brand.png';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home"><img className='logo' src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#home">Home</a> */}
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#about">About me</a> */}
              <Link className="nav-link" to='#about' smooth>About Me</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#services">Services</a> */}
              <Link className="nav-link" to='#skills' smooth>Skills</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#projects">Portfolio</a> */}
              <Link className="nav-link" to='#projects' smooth>Portfolio</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar