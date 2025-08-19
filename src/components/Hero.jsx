import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover Your Perfect
              <span className="highlight"> Style</span>
            </h1>
            <p className="hero-subtitle">
              Elevate your wardrobe with our curated collection of trendy, 
              high-quality clothing that speaks to your unique personality.
            </p>
            <div className="hero-actions">
              <button className="btn btn-large">Shop Collection</button>
              <button className="btn btn-secondary btn-large">Learn More</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Unique Styles</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
