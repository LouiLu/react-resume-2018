import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Smallulu</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="./assets/theme/img/profile.jpg"
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{ pathname: '/', state: { prev: false } }}
                >
                  Hellow World
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{ pathname: '/experiences', state: { prev: true } }}
                >
                  Experiences
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{ pathname: '/educations', state: { prev: true } }}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{ pathname: '/skills', state: { prev: true } }}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
          <Footer />
        </nav>
      </div>
    );
  }
}

export default Navbar;
