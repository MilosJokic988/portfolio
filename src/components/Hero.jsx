import React from 'react';
import '../styles/DarkPortfolio.css';
import logo from '../assets/dark/logo.png'; // ubaci stvarnu putanju do svog loga

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={logo} alt="Logo" className="hero-logo" />
      <div className="hero-content">
        <h1 className="hero-title">Noctis Design</h1>
        <p className="lead text-light">Where visuals whisper from the dark</p>
      </div>
    </section>
  );
};

export default Hero;
