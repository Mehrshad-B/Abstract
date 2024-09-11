import React from "react";
import AbstractIcon from "./AbstractIcon";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3>Abstract</h3>
        <a href="">Start Trial</a>
        <a href="">Pricing</a>
        <a href="">Download</a>
      </div>
      <div className="copyright-footer-container">
        <AbstractIcon />
        <p>Copyright ⓒ {currentYear}</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
