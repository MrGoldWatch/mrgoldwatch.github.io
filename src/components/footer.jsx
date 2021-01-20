import React from 'react';

const Footer = (props) => {

    const today = new Date().getFullYear();

    return (
        <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {today} <a href="https://www.hk.codes" rel="nofollow">
            Hosein Khosravani
          </a>. {props.children}
          </p>
        </div>
      </div>
    );
};

export default Footer;