import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Redbubble extends Component {
  render() {
    return (
      <div className="redbubble-div" id="redbubble">
        <div className="container">
          <div className="section-title text-center">
            <h2>Check Out Our Shop!</h2>
            <hr className="text-center hrText aboutus" data-content=""></hr>
          </div>

          <Iframe className="redbubble" id="rb-xzfcxvzx" src="https://www.redbubble.com/people/sbogfutsal/external-portfolio?count=3" display="initial" position="relative" scrolling="no" allowtransparency="false" width="750px" height="300px" frameBorder="0" align="center"></Iframe>
        </div>
      </div>
    );
  }
}

export default Redbubble;
