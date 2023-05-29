import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    <div className="nav-bar flex">
      <Link to="/">
        <img className="logo" src={Logo} />
      </Link>
      <div className="flex nav-menu">
        <Link className="nav-home" to="/">Home</Link>
        <a className="nav-exercises" href="#exercises">Exercises</a>
      </div>
    </div>
  )
}

export default Navbar;
