import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  custom-navbar">
      <div className="container">
        <div className="d-flex align-items-center">
          {/* Content on the left */}
          
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold " to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Content in the center */}
        <Link className="navbar-brand mx-auto fw-bold" to="/">
          EduHub
        </Link>

        {/* Content on the right */}
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
