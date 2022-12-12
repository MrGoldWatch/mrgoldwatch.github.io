import React, { Component } from "react";
import logo from "../Logo.png";

export class Navigation extends Component {

  // state = {
  //   isOpen: false,
  //   display: "none",
  //   mobile: false,
  //   width: 0,
  //   height: 0
  // };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      display: "unset",
      mobile: false,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }



  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log();
    if (this.state.width < 770 ) {
      this.setState({ display: "none" });
      this.setState({ mobile: true});
    } else {
      this.setState({ display: "unset" });
      this.setState({ mobile: false});

    }
  }

  linkClicked = () => {
    if (this.state.mobile) {
      if (this.state.isOpen) {
        this.setState({ display: "unset" });
      } else {
        this.setState({ display: "none" });
      }
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.linkClicked();
  }



  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed small-nav"
              // data-toggle="collapse"
              // data-target="#bs-example-navbar-collapse-1"
              onClick={this.toggleCollapse}
            >
              <span className="sr-only"></span>{" "}
              <span className="icon-bar dark-line"></span>{" "}
              <span className="icon-bar dark-line"></span>{" "}
              <span className="icon-bar dark-line"></span>{" "}
            </button>
            <a
              className="navbar-brand page-scroll navbar-logo-section"
              href="#header"
            >
              <img src={logo} alt="Logo" className="navbar-logo" />
              <p className="navbar-logo-text">South Bay Originals Futsal</p>
            </a>
          </div>

          <div
            className="collapse  navbar-links"
            id="#bs-example-navbar-collapse-1"
            style={{ display: this.state.display }}
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll navbar-links" onClick={this.toggleCollapse}>
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
              {/*<li>*/}
              {/*  <a href="#portfolio" className="page-scroll" onClick={this.toggleCollapse}>*/}
              {/*    Gallery*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>  */}
              <li>
                <a href="#redbubble" className="page-scroll" onClick={this.toggleCollapse}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll" onClick={this.toggleCollapse}>
                  Contact
                </a>
              </li>

              {/* <li>
                <a href="/pitch" className="page-scroll" onClick={this.toggleCollapse}>
                  Pitch
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
