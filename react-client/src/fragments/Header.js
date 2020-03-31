import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';

export default function Header() {
  return (
    <header>
      <div className="bg-info">
        <div className="container py-1">
          <Navbar/>
        </div>
      </div>

      <div className="container py-2">
        <div className="nav">
          <div className="dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button">Action</button>
              <button className="dropdown-item" type="button">Another action</button>
              <button className="dropdown-item" type="button">Something else here</button>
            </div>
          </div>

          <a className="nav-item nav-link" href="/text.html">Test HTML</a>
          <Link to="/create" className="nav-item nav-link">Create</Link>
          <a className="nav-item nav-link" href="/">Link</a>
          <a className="nav-item nav-link" href="/">Disabled</a>
        </div>
      </div>
    </header>
  );
}
