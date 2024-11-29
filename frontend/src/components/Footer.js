import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Blood Bank. All Rights Reserved.</p>
      <div>
        Follow us:
        <a href="#" className="social-link">Facebook</a> |
        <a href="#" className="social-link">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
