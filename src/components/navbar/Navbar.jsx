import React from 'react';
import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
  return (
    <div id='main-container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='navbar'>
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="300" height="300" id='logo' />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi-house icons"> Home </i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  <i className="bi-question-circle-fill icons"> Acerca de </i>
                </a>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi-search icons"> Consultas </i>
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}
