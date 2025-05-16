// About.jsx
import React from 'react';
import '../styles/About.css'; // možeš kasnije stilove prilagoditi
import profileImg from '../assets/dark/hero-bg.png';
const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container text-light text-center">
        <h2 className="about-title mb-4">O meni</h2>

        <img
         src={profileImg}// ovde ubaci putanju do tvoje slike
          alt="Milos Jokic"
          className="about-profile-img mb-4 rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '3px solid #555',
            boxShadow: '0 0 15px rgba(0,0,0,0.7)',
            margin: '0 auto',
            display: 'block',
          }}
        />

        <p
          className="about-text mx-auto"
          style={{ maxWidth: '800px', lineHeight: '1.6', fontSize: '1.1rem' }}
        >
        Kreiram digitalne svetove koji istražuju tamu, emocije i duboke priče.  
          Inspirisan mračnim temama i složenim narativima, moj rad spaja estetiku i funkcionalnost, sa dozom mistike.  
          Verujem da dizajn nije samo vizuelni doživljaj, već i putovanje kroz osećanja i misli.
        </p>

        <div className="social-icons mt-4">
          <a href="https://github.com/tvojprofil" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/tvojprofil" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:tvoj@email.com" className="text-light mx-3">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>

        <div className="skills mt-4">
          <span className="skill-tag">React</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Figma</span>
        </div>

        <blockquote className="about-quote mt-4">
          "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
        </blockquote>
      </div>
    </section>
  );
};

export default About;
