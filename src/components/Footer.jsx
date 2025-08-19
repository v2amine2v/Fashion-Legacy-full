import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">StyleHub</h3>
            <p className="footer-description">
              Your destination for curated fashion that empowers your unique style.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i class="ti ti-brand-facebook"></i></a>
              <a href="#" className="social-link"><i class="ti ti-brand-instagram"></i></a>
              <a href="#" className="social-link"><i class="ti ti-brand-x"></i></a>
              <a href="#" className="social-link"><i class="ti ti-brand-pinterest"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="contact-info">
              <p><i class="ti ti-mail"></i> hello@stylehub.com</p>
              <p><i class="ti ti-phone"></i> +1 (555) 123-4567</p>
              <p><i class="ti ti-map-pin"></i> 123 Fashion St, Style City, SC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Fashion & Legacy. All rights reserved</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
