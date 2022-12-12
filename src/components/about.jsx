import React, { Component } from "react";
// import amf from "../icons/AMF.png";



export class about extends Component {
  render() {
    return (
      <div id="about">

        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2 className=" text-center">About Us</h2>
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>
        </div>

        {/* <div className="container">
          <div className="col-md-10 col-md-offset-1">
            <iframe src="https://www.instagr.am/p/CLHvOfgJdpB/embed" width="540" height="568" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            {/* left image */}
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/about_small.jpg"
                className="img-responsive sbog-banner"
                alt=""
              />{" "}
            </div>

            {/* right text - both intro and league info */}
            <div className="col-xs-12 col-md-6">
              <div className="about-text text-center">
                <p className="first-p">
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
                <br></br>
                <p>
                  {this.props.data ? this.props.data.paragraph1 : "loading..."}
                </p>
                <br></br>
                <p className="thanky text-c">
                  {this.props.data ? this.props.data.paragraph12 : "loading..."}
                </p>
                <hr className="hrText text-c" data-content=""></hr>
                <p className="p-thick">
                  {this.props.data ? this.props.data.paragraph2 : "loading..."}
                </p>
                {/*<img src={amf} alt="amf" className="amf text-center"></img>*/}
                <p className="p-thick" id="follow">
                  Follow us on Instragram <a className="about-follow" href={this.props.data ? this.props.data.instagram : "/"}>@sbogfutsal</a> for aditional info.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thanks to our community */}
        <div className="container">
          <p className="p-thick thanky2">
            {this.props.data ? this.props.data.paragraph4 : "loading..."}
          </p>
        </div>
      </div>
    );
  }
}

export default about;
