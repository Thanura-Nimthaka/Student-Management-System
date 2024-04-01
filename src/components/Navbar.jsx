import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import icon from '../assets/library.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <nav className='navbar'>
          <div className='navbar-left'>
            <span className='navbar-name'>StudPack</span>
            <img src={icon} alt="Icon" className="navbar-icon" />
          </div>
          <div className='navbar-right'>
            {location.pathname !== '/home' && (
              <Link to="/home" className='navbar-link'>Home</Link>
            )}
            {location.pathname === '/home' && (
              <Link to="/settings" className='navbar-link'>Settings</Link>
            )}
            <Link to="/" className='navbar-link'>LogOut</Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
