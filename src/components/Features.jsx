import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Curated Selection',
      description: 'Handpicked styles that match current trends and timeless classics.'
    },
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship make it to our collection.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your new wardrobe pieces delivered to your door in 2-3 days.'
    },
    {
      icon: '💎',
      title: 'Exclusive Designs',
      description: 'Unique pieces you won\'t find anywhere else, designed for the modern individual.'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: 'Not satisfied? Return within 30 days for a full refund, no questions asked.'
    },
    {
      icon: '👥',
      title: 'Personal Styling',
      description: 'Get personalized recommendations from our fashion experts.'
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose F.&.L?</h2>
        <p className="section-subtitle">
          We're not just selling clothes, we're helping you express your unique style 
          with confidence and comfort.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
