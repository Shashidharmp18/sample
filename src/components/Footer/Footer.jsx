import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            S-VYASA (Society), a registered society under the Karnataka State
            Society Registration Act, promotes yoga as a lifestyle by combining
            the Best of East with the Best of the West. It serves as the parent
            body for S-VYASA University.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About S-VYASA</a></li>
            <li><a href="#">Campuses</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Academics */}
        <div className="footer-academics">
          <h3>Academics</h3>
          <ul>
            <li><a href="#">UG Programs</a></li>
            <li><a href="#">PG Programs</a></li>
            <li><a href="#">Yoga Programs</a></li>
            <li><a href="#">Allied Healthcare</a></li>
            <li><a href="#">Clinical Psychology</a></li>
          </ul>
        </div>

        {/* Work Hours */}
        <div className="footer-hours">
          <h3>Work Hours</h3>
          <p>⏰ Mon - Fri : 09:00 AM - 05:00 PM</p>
          <p>⏰ Saturday : 09:00 AM - 05:00 PM</p>
          <p>⏰ 2nd Saturday & Sunday : Closed</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} S-VYASA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
