import React, { Component } from "react";
import Modal from "react-awesome-modal";

export class Gallery extends Component {
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
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title community">
            <h2>Gallery</h2>
            {/*<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>*/}
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>
          <div className="row">
            <div className="portfolio-items portfolio-item1">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <span
                      type="button"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      value="Open"
                      onClick={() =>
                        this.openModal("img/portfolio/001-large.jpg")
                      }
                    >
                      <div className="hover-text">
                        {/*<h4>Lorem Ipsum</h4>*/}
                      </div>
                      <img
                        src="img/portfolio/001-small.jpg"
                        className="img-responsive gallery-image"
                        alt="Project Title"
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item2 portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <span
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      value="Open"
                      onClick={() =>
                        this.openModal("img/portfolio/002-large.jpg")
                      }
                    >
                      <div className="hover-text">
                        {/*<h4>Lorem Ipsum</h4>*/}
                      </div>
                      <img
                        src="img/portfolio/002-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item3 portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <span
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      value="Open"
                      onClick={() =>
                        this.openModal("img/portfolio/003-large.jpg")
                      }
                    >
                      <div className="hover-text">
                        {/*<h4>Lorem Ipsum</h4>*/}
                      </div>
                      <img
                        src="img/portfolio/003-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item4 portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <span
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      value="Open"
                      onClick={() =>
                        this.openModal("img/portfolio/010-large.jpg")
                      }
                    >
                      <div className="hover-text">
                        {/*<h4>Lorem Ipsum</h4>*/}
                      </div>
                      <img
                        src="img/portfolio/010-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item5 portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <span
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      value="Open"
                      onClick={() =>
                        this.openModal("img/portfolio/007-large.jpg")
                      }
                    >
                      <div className="hover-text">
                        {/*<h4>Lorem Ipsum</h4>*/}
                      </div>
                      <img
                        src="img/portfolio/007-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item6 portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <span
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      value="Open"
                      onClick={() =>
                        this.openModal("img/portfolio/006-large.jpg")
                      }
                    >
                      <div className="hover-text">
                        {/*<h4>Lorem Ipsum</h4>*/}
                      </div>
                      <img
                        src="img/portfolio/006-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            visible={this.state.visible}
            width="1000"
            // height="auto"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
            className="modal-size"
          >
            <div>
              <img
                src={this.state.source}
                className="img-responsive"
                alt="Project Title"
                onClick={() => this.closeModal()}
              />{" "}
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Gallery;
