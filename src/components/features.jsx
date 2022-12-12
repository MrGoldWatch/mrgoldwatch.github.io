import React, { Component } from "react";
import pickup from "../icons/pickup.png";
import training from "../icons/training.png";
import volunteer from "../icons/volunteer.png";
import club from "../icons/club.png";
import Modal from "react-awesome-modal";
// import InstagramEmbed from "react-instagram-embed";

// import football from '../icons/football.png';
// import classes from "*.module.css";

export class features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      source: "",
    };
  }

  openModal(source) {
    this.setState({
      visible: true,
      source: source,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

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
            <div className="col-xs-6 col-md-3 features-get-involved-div">
              {" "}
              {/*<i className={d.icon}></i>*/}
              <img src={pickup} alt="pickup" className="features-logos"></img>
              <h3>Pickup</h3>
              <p>dm <a href="https://www.instagram.com/sbogfutsal/">@sbogfutsal</a> to reserve spots</p>

            </div>
            <div className="col-xs-6 col-md-3 features-get-involved-div">
              {" "}
              {/*<i className={d.icon}></i>*/}
              <img
                src={training}
                alt="training"
                className="features-logos"
              ></img>
              <h3>Training</h3>
              <p className="negative-margin">Private and Group Training for All.</p>
{/*               <span */}
{/*               className="meet-the-team" */}
{/*                 type="button" */}
{/*                 title="Project Title" */}
{/*                 data-lightbox-gallery="gallery1" */}
{/*                 value="Open" */}
{/*                 onClick={() => */}
{/*                   this.openModal('https://www.instagram.com/p/CKPuPAAp2en/?utm_source=ig_web_copy_link') */}
{/*                 } */}
{/*               > */}
{/*                  */}
{/*                 <a href="https://www.instagram.com/sbogfutsal/">Learn More</a> */}

{/*               </span>{" "} */}
            </div>

            <div className="col-xs-6 col-md-3 features-get-involved-div">
              {" "}
              {/*<i className={d.icon}></i>*/}
              <img src={club} alt="club" className="features-logos"></img>
              <h3>Futsal Club</h3>
              <p className="negative-margin">American Futsal League Pro Squad.</p>
              {/*<span
              className="meet-the-team"
                type="button"
                title="Project Title"
                data-lightbox-gallery="gallery1"
                value="Open"
                onClick={() =>
                  this.openModal('https://www.instagram.com/p/CNkoXxxJcjd/?utm_source=ig_web_copy_link')
                }
              >
                <a href="https://www.instagram.com/sbogfutsal/">Meet the team</a>

              </span>{" "}*/}


            </div>
            <div className="col-xs-6 col-md-3 features-get-involved-div">
              {" "}
              <img src={volunteer} alt="volunteer" className="features-logos"></img>
              {/*<i className={d.icon}></i>*/}
              <h3>Get Involved</h3>
              <p>Contact <a href="https://www.instagram.com/sbogfutsal/">@sbogfutsal</a> to get involved with SBOG Futsal.</p>
              {/* <a href="/pitch">
                <img
                  src={volunteer}
                  alt="volunteer"
                  className="features-logos"
                ></img>
                <h3>Get Involved</h3>
                <p>Get Involved with SBOG Futsal.</p>
              </a> */}
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          width="660"
          // height="auto"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
          className="modal-size"
        >
          <div>
            <span
              className="img-responsive"
              alt="Project Title"
              onClick={() => this.closeModal()}
            >{" "}
              {this.state.visible} ?
                {/*<InstagramEmbed*/}
                {/*  clientAccessToken="474689437062723|vgP73otYiByC0XUHx3eBT-KDkIQ"*/}

                {/*  url={this.state.source}*/}


                {/*  // maxWidth={320}*/}
                {/*  hideCaption={true}*/}
                {/*// containerTagName='div'*/}
                {/*// protocol=''*/}
                {/*// injectScript*/}
                {/*// onLoading={() => { }}*/}
                {/*// onSuccess={() => { }}*/}
                {/*// onAfterRender={() => { }}*/}
                {/*// onFailure={() => { }}*/}
                {/*/>*/}
              <div></div>
              : <div></div>
            </span>
          </div>
        </Modal>

      </div>
    );
    // ]
    // return children;
  }
}

export default features;


// {
//   this.props.data
//     ? this.props.data.map((d, i) => (
//         <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//           {" "}
//           <i className={d.icon}></i>
//           <img
//             src={
//               d.icon === "pickup"
//                 ? pickup
//                 : d.icon === "trainings"
//                 ? trainings
//                 : d.icon === "volunteer"
//                 ? volunteer
//                 : d.icon === "club"
//                 ? club
//                 : football
//             }
//             alt="logo"
//           ></img>
//           <h3>{d.title}</h3>
//           <p>{d.text}</p>
//         </div>
//       ))
//     : "Loading...";
// } 