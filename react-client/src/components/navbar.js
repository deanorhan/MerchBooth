import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const searchIcon = {
    position: 'absolute',
    left: '.5rem',
    height: '100%',
    paddingTop: '10px',
    pointerEvents: 'none'
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg mb-3 px-0">
      <Link to="/" className="navbar-brand">Merch Booth</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navbarNav" className="collapse navbar-collapse">
        <form className="position-relative w-100 mx-lg-3" action="/search" role="search">
          <i className="fas fa-search"  style={searchIcon}></i>
          <input type="search" className="form-control mr-sm-2" style={{paddingLeft: '2rem'}} name="query" placeholder="Search" aria-label="Search" />
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
