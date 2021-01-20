import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import {LinkContainer} from 'react-router-bootstrap'; // THIS DOES THE SAME AS THE LINK
import { Button, Col, Container, Media, Row, ResponsiveEmbed } from 'react-bootstrap';
// import banner from '/img/tournaments/012421.JPG';
import Footer from './footer';

const Tournament = (props) => {

    return (
        <div id="tournament-page">
            <Container >
                <Row>
                    <Container className="tournament-header"><img
                        src="/img/tournaments/012421_banner_o.PNG"
                        width={800}
                        height={200}
                        alt="flyer"
                    /></Container>
                </Row>
                <Row className="image-row">
                    <Col sm="6" md="7" >
                        <img
                            src="/img/tournaments/012421_main.PNG"
                            width={550}
                            height={500}
                            alt="flyer"
                        />

                    </Col>
                    <Col md="5" >
                        <h3 className="dm-us">DM <a
                            href="https://www.instagram.com/sbogfutsal/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >@sbogfutsal</a> to sign up!
                    </h3>
                        <img
                            src="/img/tournaments/012421_info.PNG"
                            width={420}
                            height={217}
                            alt="flyer"
                            className="tournament-details"
                        />
                        <Link to="/" className="t-home-link"><Button className="main-page-btn">SBOG Main Page</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Row>
                {/* <div id="footer">
                    <div className="container text-center">
                        <p>
                            &copy; 2021 <a href="https://www.hk.codes" rel="nofollow">
                                Hosein Khosravani </a>
                        </p>
                    </div>
                </div> */}
                <Footer/>
            </Row>
        </div>
    );
};
export default Tournament;
