import React from 'react';
import './Portfolio.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Education_Data from '../../assets/education_data';
import Experience_data from '../../assets/Experience_data';
import certifications_data from '../../assets/certifications_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';
import projects_data from '../../assets/projects_data.js';

const Portfolio = () => {
    return (
        <div id='portfolio' className="portfolio">
            {/* Education Section */}
            <div className="education-title">
                <h1>Education</h1>
                <img src={theme_pattern} alt="Decorative pattern" />
            </div>
            <div className="education-container">
                {Education_Data.map((education, index) => (
                    <div key={index} className='education-format'>
                        <h3>{education.s_no}</h3>
                        <h2>{education.s_name}</h2>
                        <p>{education.s_desc}</p>
                        <p>{education.s_grade}</p>
                    </div>
                ))}
            </div>

            {/* Experience Section */}
            <div className="experience-title">
                <h1>Experience</h1>
                <img src={theme_pattern} alt="Decorative pattern" />
            </div>
            <div className="experience-container">
                {Experience_data.map((experience, index) => (
                    <div key={index} className='experience-details'>
                        <h2>{experience.s_name}</h2>
                        <h3>{experience.s_title}</h3>
                        <p>{experience.s_duration}</p>
                        <p>{experience.s_desc}</p>
                    </div>
                ))}
            </div>

            {/* Projects Section */}
            <div className="project-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="project-container">
                {projects_data.map((project, index) => (
                    <div key={index} className="project-details">
                        <div className="project-content">
                            <img src={project.s_img} alt={project.s_name} className="project-img" />
                            <div className="project-text">
                                <h2>{project.s_name}</h2>
                                <p className="project-desc">{project.s_desc}</p> {/* Description always visible */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
             {/* Show More Button */}
             <div className="show-more-container">
                    <a 
                      href="https://github.com/Charanvs37" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="show-more-btn"
                    >
                      Show More
                      <img src={arrow_icon} alt="Arrow" className="arrow-icon" />
                    </a>
                  </div>
            
            {/* Certifications Section */}
            <div className="certification-title">
                <h1>Certifications</h1>
                <img src={theme_pattern} alt="Decorative Pattern" />
            </div>
            <div className="certification-container">
                {certifications_data.map((certification, index) => (
                    <div key={index} className="certification-details">
                        <div className="certification-content">
                            {/* Clickable Image */}
                            <a href={certification.link} target="_blank" rel="noopener noreferrer">
                                <img src={certification.s_img} alt={certification.s_name} className="certification-img" />
                            </a>
                            <div className="certification-text">
                                <h2>{certification.s_name}</h2>
                                <p>{certification.s_desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


             {/* Show More Button */}
                  <div className="show-more-container">
                    <a 
                      href="https://www.linkedin.com/in/surya-charan-vaddadi/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="show-more-btn"
                    >
                      Show More
                      <img src={arrow_icon} alt="Arrow" className="arrow-icon" />
                    </a>
                  </div>
                </div> 
              );
            };

export default Portfolio;
