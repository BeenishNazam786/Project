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

    <div className="contact-us">
        <p>Contact us if you need BLOOD:
          <a href="tel:+358417494633" className="phone-link">+358 740 4633</a></p>
      </div>
    </footer>
  );
};

export default Footer;
