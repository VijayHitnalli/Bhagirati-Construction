import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
    <div className="name">
      <h1>Bhagirati Construction</h1>
      <p>We build what you dream</p>
    </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;