import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from './planet.png';
import './navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar-container">
      <div className="logo-container">
        <div className="brand-section">
          <img src={logo} alt="logo" className="logo-image" />
          <div className="logo-title">Space Travelers&apos; Hub</div>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active-link" to="/">Rockets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active-link" to="/missions">Missions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active-link" to="/Dragons">Dragons</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active-link" to="/my-profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);
export default Navbar;
