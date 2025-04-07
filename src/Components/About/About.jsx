import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      {/* About Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      {/* Image & Content Section */}
      <div className="about-section">
        {/* Left Side - Profile Image */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Right Side - About Text & Skills */}
        <div className="about-right">
          <div className="about-para">
            <p>"As a Third-year Computer Science and Engineering student specializing in Big Data Analytics, I bridge the gap between Software Engineering and the limitless potential of Data and Cloud Technologies. With a passion for turning complex datasets into meaningful insights, I design scalable, high-performance solutions that drive innovation."</p>
            <p>"My expertise spans cloud-based applications, large-scale data processing, and cloud infrastructure, enabling me to build resilient, data-driven systems that redefine efficiency and scalability."</p>
          </div>

          {/* Technical Skills */}
          <div className="about-skills">
            <h2>Technical Skills</h2>
            <ul className="skills-list">
              <li><strong>Programming Languages:</strong> C, Java, Python</li>
              <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React.js, Node.js</li>
              <li><strong>Database Management:</strong> PostgreSQL, MongoDB</li>
              <li><strong>Version Control:</strong> Git, GitHub</li>
              <li><strong>Cloud Technologies:</strong> AWS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Achievements1 Section */}
      <div className="about-achievements1">
        <div className="about-achievement1">
          <h1>1+</h1>
          <p>INTERNSHIPS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement1">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement1">
          <h1>3+</h1>
          <p>CERTIFICATIONS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
