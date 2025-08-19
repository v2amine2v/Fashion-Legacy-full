import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

