import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  return (
    <>
      <nav className={navbar ? "navbar navbar-expand fixed-top active" : "navbar navbar-expand fixed-top"}>
        <a href="#" className="navbar-brand">
          <span>Adel's</span> Private Suites
        </a>
        <div className="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Booking</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
