import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg'; 
import location_icon from '../../assets/location_icon.svg'; 
import call_icon from '../../assets/call_icon.svg'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      ...formData,
      access_key: "8305ec5e-d5f6-4618-b4f3-aa06aa25e437"
    };
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });
      const res = await response.json();
  
      if (res.success) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      setSuccessMessage('');
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am actively looking for internships and Pre-Placement Offers
            (PPOs) where I can contribute to innovative projects. I am eager to
            collaborate with a dynamic team and grow both personally and
            professionally.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" />
              <p>2200031706cseh@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" />
              <p>+91 93925 74837</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Vijayawada, Andhra Pradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            placeholder='Enter your name' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
          />
          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            placeholder='Enter your email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
          />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea 
            name="message" 
            rows="8" 
            placeholder='Enter Your Message' 
            value={formData.message} 
            onChange={handleChange} 
          />
          <button type='submit' className="contact-submit">Submit now</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
