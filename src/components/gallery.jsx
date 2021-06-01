import React, { Component } from "react";
// import Modal from "react-awesome-modal";

import InstagramFeed from '../npm/react-ig-feed';
import '../styles/index.css';
// import 'react-ig-feed/dist/index.css';

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
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>
        </div>

        <div className="container ig-feed">
          <InstagramFeed 
          // token="IGQVJWLTM1RXozRXAyUmVMZA1VBQWdxRjRaeDk5ZAWloaEF5ZAHRnZAHYwX1JQbUo3cFp2Ym85YnNBYnpScVFwR3FHSzZANaFBZAa3M0R0UxS2QtSEcxdlNlT0xnZADRDUjJKT25LRkkyekZAyUDFjYlZAlZAFAxcAZDZD" 
          token="IGQVJWNEhjRDhTWmREaDBPVWtzbDI2MkNsSllJT3E5M1FET21BWjE5UGVEdUI4d25JR2phM3k4bHF3T0ZArSHRJaGp4c25mQllhOWFieWhpbjBHbDZALSHluQlp5bG54cGpycWMzdUVxWlg3WVQ2S2txTgZDZD"
          counter="12" />
        </div>
      </div>
    );
  }
}

export default Gallery;
