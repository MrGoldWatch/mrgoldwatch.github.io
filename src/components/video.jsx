import React from "react";
// import { BrowserRouter as Router, Route, Switch,
import { Link } from "react-router-dom";
// import {LinkContainer} from 'react-router-bootstrap'; // THIS DOES THE SAME AS THE LINK
import { Button, Container, Row } from "react-bootstrap";
// import banner from '/img/tournaments/012421.JPG';
import Footer from "./footer";
// import InstagramEmbed from "react-instagram-embed";
// import Iframe from "react-iframe";
// import ReactPlayer from "react-player";
// import NavbarInstance from './navigation';

// import Feed from "react-instagram-authless-feed"
// import InstagramFeed  from '../npm/react-ig-feed';
import '../npm/react-ig-feed/dist/index.css';


const Tournament = (props) => {

    
  return (
    <div id="tournament-page">
      <Container>
        
        <Row>
          <Container className="tournament-header">
            {/* <img
                            src="https://www.instagram.com/p/CLHvOfgJdpB/?utm_source=ig_web_copy_link"
                            width={800}
                            height={200}
                            alt="flyer"
                        /> */}
            <h1>TEST PAGE</h1>
          </Container>
        </Row>
        {/*<InstagramEmbed
          //clientAccessToken="474689437062723|vgP73otYiByC0XUHx3eBT-KDkIQ"
          // url='https://www.instagram.com/p/CMQ_yiYJTRS/?utm_source=ig_web_copy_link'
        //url='https://www.instagram.com/p/CL4tUqIJLKC/?utm_source=ig_web_copy_link'
        // url='https://www.instagram.com/sbogfutsal/'
        // url='https://www.instagram.com/tv/CLSbHumJ4Ke/'
        // url='https://www.instagram.com/p/CNUCX7eJtJB/?utm_source=ig_web_copy_link'
        //   url='https://www.instagram.com/p/CLHvOfgJdpB/?utm_source=ig_web_copy_link'
        //   url='https://www.instagram.com/p/CI30w9YJjkW/?utm_source=ig_web_copy_link'
        // url='https://www.instagram.com/p/CLz0DIFJq4G/?utm_source=ig_web_copy_link'

          // maxWidth={320}
          //hideCaption={true}
          // containerTagName='div'
          // protocol=''
          // injectScript
          // onLoading={() => { }}
          // onSuccess={() => { }}
          // onAfterRender={() => { }}
          // onFailure={() => { }}
        />
        <div>
        </div>*/}
        {/* <Feed userName="sbogfutsal" className="Feed" classNameLoading="Loading" limit="8"/> 

        {/* <iframe
          src="https://www.instagr.am/p/CLHvOfgJdpB/embed"
          width="540"
          height="568"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>*/}

        {/* <ReactPlayer url='https://www.instagram.com/p/CLHvOfgJdpB/?utm_source=ig_web_copy_link' /> */}
        {/* <InstagramFeed token="IGQVJWLTM1RXozRXAyUmVMZA1VBQWdxRjRaeDk5ZAWloaEF5ZAHRnZAHYwX1JQbUo3cFp2Ym85YnNBYnpScVFwR3FHSzZANaFBZAa3M0R0UxS2QtSEcxdlNlT0xnZADRDUjJKT25LRkkyekZAyUDFjYlZAlZAFAxcAZDZD"  counter="11"/> */}


        <Link to="/" className="t-home-link">
          <Button className="main-page-btn">SBOG Main Page</Button>
        </Link>
      </Container>
      
      {/*<InstagramFeed token="IGQVJYMFM2Y3RPTmhzdW1fbVZAMZAWRXWlRKZA183VUM0WmxvMDhGU1hNeGg1a0NlcWVqcmZASLXZANRWQyV2V4N1pHUlBUUkRuLTVPSHNPdzBHbW1pRFJEZAFNrQlpWWnlFMkVTNHJvdTd0WDR0U3Q5MWYyWQZDZD"  counter="2"/>*/}

      <Row>
        {/* <div id="footer">
                    <div className="container text-center">
                        <p>
                            &copy; 2021 <a href="https://www.hk.codes" rel="nofollow">
                                Hosein Khosravani </a>
                        </p>
                    </div>
                </div> */}
        <Footer />
      </Row>
    </div>
  );
};
export default Tournament;
