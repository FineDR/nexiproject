import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CRow, CCol, CContainer } from '@coreui/react';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faNode,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {
  faCodeBranch,
  faCloud,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <section id="skills" className='container justify-content-center'>
      <style>{`
        .skills-container {
          padding: 2rem; /* Adds padding around the container */
        }

        .skill-item {
          display: flex;
          align-items: flex-start; /* Align icon and text at the top */
          margin-bottom: 1rem; /* Space between items */
        }

        .skill-icon {
          margin-right: 0.5rem; /* Space between icon and text */
          color: #3498db; /* Default icon color */
          font-size: 1.5rem; /* Icon size */
        }

        h2, h3 {
          color: #FFD700; /* Bright Yellow for headings */
          font-family: 'Roboto', sans-serif; /* Font family for headings */
        }

        p {
          margin: 0; /* Remove default margin from paragraphs */
        }
      `}</style>

      <CContainer>
        <div className="skills-container">
          <h1 className='text-center'>My Skills</h1>
          <CRow>
            <CCol>
              {/* Frontend Skills */}
              <div>
                <h3>Frontend Development</h3>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                  <p>React.js</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faJs} className="skill-icon" />
                  <p>JavaScript (ES6+)</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                  <p>HTML5 & CSS3</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
                  <p>Bootstrap</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                  <p>Responsive Web Design</p>
                </div>
              </div>

            </CCol>
            <CCol>
              {/* Backend Skills */}
              <div>
                <h3>Backend Development</h3>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faNode} className="skill-icon" />
                  <p>Node.js</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCodeBranch} className="skill-icon" />
                  <p>Express.js</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCloud} className="skill-icon" />
                  <p>Django</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <p>RESTful APIs</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <p>SQL & NoSQL Databases</p>
                </div>
              </div>

            </CCol>
            <CCol>

              {/* Tools & Technologies */}
              <div>
                <h3>Tools & Technologies</h3>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
                  <p>Git & GitHub</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCloud} className="skill-icon" />
                  <p>Firebase</p>
                </div>
              </div>

            </CCol>
          </CRow>
        </div>
      </CContainer>
    </section>
  );
}

export default Skills;



