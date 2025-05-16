import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container text-center text-light">
        <p className="mb-2">© {new Date().getFullYear()} OW. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:nothicdesign@gmail.com" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
