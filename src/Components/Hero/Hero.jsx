import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
  <span>I'm Surya Charan,</span>
  <br />
  <span className="typewriter-text">CSE Undergrad of 2026.</span>
</h1>


      <p>
      I'm a Full Stack Developer & Data Science Enthusiast.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>

    </div>
  );
};

export default Hero;
