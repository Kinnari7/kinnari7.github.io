// IMPORT LIBRARIES
import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// IMPORT STYLES
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar-custom">
        <NavLink exact to="/" className="navbar-brand">
          Kinnari Kotadiya
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">
                About Me
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink exact to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/resume" className="nav-link">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
