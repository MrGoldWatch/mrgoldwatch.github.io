import React, { Component } from "react";
import pickup from '../icons/pickup.png';
import training from '../icons/training.png';
import volunteer from '../icons/volunteer.png';
import club from '../icons/club.png';
import football from '../icons/football.png';
// import classes from "*.module.css";

export class features extends Component {
  render() {
    // let children;
    // let icon;
    return (
      // children = [
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title community">
            <h2>Our Community</h2>
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>
          <div className="row">

                  <div   className="col-xs-6 col-md-3">
                    {" "}
                    {/*<i className={d.icon}></i>*/}
                    
                    <img src={pickup} alt='pickup' className="features-logos"></img>
                    <h3>Pickup</h3>
                  </div>
                  <div   className="col-xs-6 col-md-3">
                    {" "}
                    {/*<i className={d.icon}></i>*/}
                    
                    <img src={training} alt='training' className="features-logos"></img>
                    <h3>Training</h3>
                  </div>
                  <div   className="col-xs-6 col-md-3">
                    {" "}
                    {/*<i className={d.icon}></i>*/}
                    
                    <img src={volunteer} alt='volunteer' className="features-logos"></img>
                    <h3>Volunteer</h3>
                  </div>
                  <div   className="col-xs-6 col-md-3">
                    {" "}
                    {/*<i className={d.icon}></i>*/}
                    
                    <img src={club} alt='club' className="features-logos"></img>
                    <h3>Futsal Club</h3>
                  </div>
          </div>
        </div>
      </div>
    );
      // ]
    // return children;
  }
}

export default features;

{/* {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    
                    <img src={d.icon === "pickup" ? pickup 
                                : d.icon === "trainings" ? trainings 
                                : d.icon === "volunteer" ? volunteer
                                : d.icon === "club" ? club : football } 
                              alt='logo'>
                    </img>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."} */}