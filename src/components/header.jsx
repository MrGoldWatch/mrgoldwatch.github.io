import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <div className="col-md-12 intro-social">
                    <div className="social">
                      <ul>
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.instagram : "/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.facebook : "/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.twitter : "/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        {/*<li>
                          <a
                            href={
                              this.props.data ? this.props.data.youtube : "/"
                            }
                          >
                            <i className="fa fa-youtube"></i>
                          </a>
                          </li>*/}
                        <li>
                          <a
                            href={
                              this.props.data ? this.props.data.twitch : "/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitch"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
