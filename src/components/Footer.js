import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="company-name">Bhagirati Construction</p>
        <p className="tagline">Building Excellence, Brick by Brick</p>

        <div className="contact-info">
          <p>📍 Location: Vijayapur, Karnataka</p>
          <p>📞 Contact: +91 8317394414</p>
          <p>📧 Email: info@bhagiraticonstruction.com</p>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Bhagirati Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;