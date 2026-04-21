import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-circle">
              <img src="/assets/Himalayan_Yoga_Academy.png" alt="Himalayan Yoga Academy Logo" />
            </div>
            <span className="logo-text">Himalayan Yoga Academy</span>
          </div>
          <p>Empowering global yoga teachers since 2009. Registered with Yoga Alliance USA.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-tripadvisor"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#retreats">Retreats</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for updates and spiritual insights.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Himalayan Yoga Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
