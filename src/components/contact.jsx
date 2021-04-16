import React, { Component } from "react";
import Footer from "./footer";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact" className="text-center">
          <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title community">
              <h2>Contact Info</h2>
              <hr
                className="text-center hrText2 aboutus contactus"
                data-content=""
              ></hr>
            </div>
          </div>
          <div className="container pt-2">
            <div className="row">
              <div className="col-md-12 intro-social">
                <div className="row">
                  {/*<h3>Contact Info</h3>*/}
                  <div className="col-md-4">
                    <span>
                      <i className="fa fa-map-marker"></i> Address:
                    </span>
                    {this.props.data ? this.props.data.address : "loading"}
                  </div>

                  <div className="col-md-4">
                    <span>
                      <i className="fa fa-phone"></i> Phone:
                    </span>{" "}
                    {this.props.data ? this.props.data.phone : "loading"}
                  </div>

                  <div className="col-md-4">
                    <span>
                      <i className="fa fa-envelope-o"></i> Email:
                    </span>{" "}
                    {this.props.data ? this.props.data.email : "loading"}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-12 intro-social">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer>
        </Footer>
      </div>
    );
  }
}

export default Contact;
