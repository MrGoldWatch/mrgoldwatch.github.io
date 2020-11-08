import React, { Component } from "react";
import amf from "../icons/AMF.png";
import amf2 from "../icons/AMF2.png";
import amf3 from "../icons/amft.gif";
import football from "../icons/football.png";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2 className=" text-center">About Us</h2>
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/about.jpg"
                className="img-responsive sbog-banner"
                alt=""
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text text-center">
                <p className="first-p">
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
                <p>
                  {this.props.data ? this.props.data.paragraph1 : "loading..."}
                </p>
                <p className="thanky text-c">
                  {this.props.data ? this.props.data.paragraph12 : "loading..."}
                </p>
                <hr className="hrText text-c" data-content=""></hr>
                <p className="p-thick">
                  {this.props.data ? this.props.data.paragraph2 : "loading..."}
                </p>
                <img src={amf} alt="amf" className="amf text-center"></img>
                <p className="p-thick">
                  {this.props.data ? this.props.data.paragraph3 : "loading..."}
                </p>

                {/*<h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
          <p className="p-thick thanky2">
            {this.props.data ? this.props.data.paragraph4 : "loading..."}
          </p>
        </div>
      </div>
    );
  }
}

export default about;
