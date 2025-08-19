import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
        <div className="about-visual">
            <div className="about-image-placeholder">
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              Founded in 2020, Fashion & Legacy began with a simple mission: to make fashion 
              accessible without compromising on quality. We believe everyone deserves 
              to feel confident and stylish in their everyday life.
            </p>
            <p className="about-description">
              Our team of fashion enthusiasts and style experts work tirelessly to 
              curate collections that blend contemporary trends with timeless elegance. 
              We're not just selling clothes – we're building a community of confident 
              individuals who express themselves through fashion.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">3+</span>
                <span className="about-stat-label">Years of Excellence</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">50+</span>
                <span className="about-stat-label">Brand Partners</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">98%</span>
                <span className="about-stat-label">Customer Satisfaction</span>
              </div>
            </div>
            <button className="btn ps">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
