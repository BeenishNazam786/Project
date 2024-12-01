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
        <p>Contact us at:
          <a href="tel:+1234567890" className="phone-link">+123 456 7890</a></p>
      </div>
    </footer>
  );
};

export default Footer;
