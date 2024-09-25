import React from "react";
import AbstractIcon from "./AbstractIcon";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3 className="footer-title">Abstract</h3>
        <a href="">Start Trial</a>
        <a href="">Pricing</a>
        <a href="">Download</a>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Resources</h3>
        <a href="">Blog</a>
        <a href="">Help Center</a>
        <a href="">Release Notes</a>
        <a href="">Status</a>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Community</h3>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
        <a href="">Facebook</a>
        <a href="">Dribbble</a>
        <a href="">Podcast</a>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Company</h3>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="" id="break">
          Legal
        </a>
        <strong>Contact Us</strong>
        <a href="mailto:info@abstract.com">info@abstract.com</a>
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
