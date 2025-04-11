import React from 'react';
import './Achievements.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Achievements_Data from '../../assets/achievements_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Achievements = () => {
  return (
    <div id="achievements" className="achievements-wrapper">
      <div className="achievements-title">
        <h1>Achievements</h1>
        <img src={theme_pattern} alt="Decorative Pattern" />
      </div>

      <div className="achievements-container">
        {Achievements_Data.map((achievement, index) => (
          <div key={index} className="achievements-details">
            <div className="achievements-content">
              {/* Wrap Image inside <a> for clickability */}
              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={achievement.s_img}
                  alt={achievement.s_name}
                  className="achievements-img"
                />
              </a>
              <div className="achievements-text">
                <h2>{achievement.s_name}</h2> {/* Display the s_name here */}
                <h3>{achievement.s_desc}</h3> {/* Description */}
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

export default Achievements;
