import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center community">
            <h2>Words from Our Community</h2>
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>
          <div className="row testy-test2">


                  <div key="private-training" className="col-md-4 testi1">
                    <div className="testimonial">
                      {/*<div className="testimonial-image">
                        {" "}
                         <img src={d.img} alt="" />{" "} 
                      </div>*/}
                      <div className="testimonial-content">
                        <p>“We originally signed up for personal training with SBOG simply as a way to learn something new and get out of the house during quarantine. 
                          It quickly evolved to so much more than just an hour spent outside each week. My boyfriend and I excitedly awaited lessons every weekend with Gabe and we were never disappointed. 
                          The care and dedication to personalizing our Futsal experience, for two entirely different skill levels (my boyfriend, an advanced soccer player; and me a complete beginner), was so special. 
                          With the personal attention and professional training approach to our lessons, I went from an enthusiastic spectator to a regular pick-up player - that teammates actually wanted to pass the ball to - in just a short 10 weeks. 
                          SBOG is truly creating a family and community in the South Bay and they make Futsal accessible to all! I highly recommend the personal training classes for learners of all ages.”
                        </p>
                        <div className="testimonial-meta"> - Hillary L., Redondo Beach, CA </div>
                      </div>
                    </div>
                  </div>

                  <div key="sbogfc" className="col-md-4 testi2">
                    <div className="testimonial">
                      {/*<div className="testimonial-image">
                        {" "}
                         <img src={d.img} alt="" />{" "} 
                      </div>*/}
                      <div className="testimonial-content">
                        <p>“Being a current Goalkeeper on the South Bay Originals Futsal Club has been an honor. 
                          We're not just a Professional Futsal Team, we're a community that supports players of all skill levels both on & off the court! 
                          I have nothing but positive things to say about SBOG Futsal & I'll always be thankful for them bringing me in with open arms & giving me the opportunity to impact others in a positive way!”</p>
                        <div className="testimonial-meta"> -  Juan O., Hawthorne, CA </div>
                      </div>
                    </div>

                    <div className="testimonial youth">
                      {/*<div className="testimonial-image">
                        {" "}
                         <img src={d.img} alt="" />{" "} 
                      </div>*/}
                      <div className="testimonial-content">
                        <p>“It has been a pleasure to be part of this group. My 13 year old loves to play, and this group has made her part of a new family. She might be the youngest but they are not easy on her. 
                          It’s fun and she gets out of the house. I give it an A-plus. I recommend this group to anybody that wants to play and get out.”
                        </p>
                        <div className="testimonial-meta"> -  Cindy L., South Bay, CA</div>
                      </div>
                    </div>
                  </div>

                  <div key="pick-up" className="col-md-4 testi3">
                    <div className="testimonial">
                      {/*<div className="testimonial-image">
                        {" "}
                         <img src={d.img} alt="" />{" "} 
                      </div>*/}
                      <div className="testimonial-content">
                        <p>“In the relatively short amount of time that they have been organizing pickup and other events, SBOG has managed to create a real community. 
                          From the moment I first signed up for a session, they were welcoming, genuinely interested in getting to know me and making me feel like I was part of the family. 
                          SBOG is constantly considering ways in which to positively engage and give back to the communities that they operate in. And it shows, especially in the passion that both the players and organizers have for the game and for the club itself. 
                          SBOG consistently manages to create a fun and positive environment in which players can really improve their skill or learn more about Futsal.”
                        </p>
                        <div className="testimonial-meta"> -  Layla M., Glendale, CA </div>
                      </div>
                    </div>
                  </div>

                  




          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
