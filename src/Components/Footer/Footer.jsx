import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Dear Recruiter</h1>
          <p>
            "Congratulations in advance on bringing an unstoppable force of innovation and drive to your team. <br />
            Because, there's truly no one like him!"
          </p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Surya Charan Vaddadi. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div> 
    </div> 
  );
};

export default Footer;
