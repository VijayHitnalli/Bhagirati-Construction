import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="company-name">Bhagirati Construction</p>
        <p className="tagline">Building Excellence, Brick by Brick</p>

        <div className="contact-info">
          <p>📍 Location: Vijayapur, Karnataka</p>
          <p>📞 Contact: 
            <a href="tel:+918317394414" className="phone-link">+91 8317394414</a></p>
            
          <p>📧 Email: 
            <a href="mailto:info@bhagiraticonstruction.com" className=" ">info@bhagiraticonstruction.com</a></p>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Bhagirati Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;