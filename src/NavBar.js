import React from 'react';
import { Link } from 'react-scroll'; // Ensure react-scroll is installed
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="home" smooth={true}>Home</Link></li>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="experiences" smooth={true}>Experience</Link></li>
        <li><Link to="projects" smooth={true}>Projects</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
