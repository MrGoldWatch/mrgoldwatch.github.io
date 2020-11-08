import React, { Component } from "react";
import logo from "../Logo.png";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
      
            <a className="navbar-brand page-scroll navbar-logo-section" href="#page-top">
            <img src={logo} alt="Logo" className="navbar-logo" /> 
            <p className="navbar-logo-text">South Bay Originals Futsal</p>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse navbar-links"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">

              <li>
                <a href="#about" className="page-scroll navbar-links">
                  About
                </a>
              </li>

              {/* <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li> */}
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> 
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li> */}
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
