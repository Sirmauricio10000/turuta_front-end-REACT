import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div id='main-container'>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${isNavbarOpen ? 'active' : ''}`} id='navbar'>
        <div className="container-fluid">

          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="300" height="300" id='logo' />
          </Link>

          <button
            className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={handleNavbarToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeNavbar}>
                  <i className="bi-house icons">  </i> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeNavbar}>
                  <i className="bi-question-circle-fill icons">  </i> Ayuda
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/rutas" className="nav-link" onClick={closeNavbar}>
                  <i className="bi-signpost-split" style={{ fontSize: '20px' }}>  </i> Rutas
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/paradas" className="nav-link" onClick={closeNavbar}>
                  <i className="bi-sign-stop-fill" style={{ fontSize: '20px' }}>  </i> Paradas
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/buscador" className="nav-link" onClick={closeNavbar}>
                  <i className="bi-search icons">  </i> Encuentra tu ruta
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}
