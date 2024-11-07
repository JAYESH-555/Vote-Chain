import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Copyrights © 2024 |  {" "}
          <a
            className="profile"
            href="https://github.com/JAYESH-555"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAYESH SASTURKAR
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by {""}
          <a
            className="profile"
            href="https://github.com/JAYESH-555"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jayesh Sasturkar
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
