import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faCode, faCoffee } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className='container justify-content-center'>
      <style>{`
        .about-container {
          padding: 2rem; /* Adds padding around the container */
        }

        .about-item {
          display: flex;
          align-items: flex-start; /* Align icon and text at the top */
          margin-bottom: 1rem; /* Space between items */
        }

        .about-icon {
          margin-right: 0.5rem; /* Space between icon and text */
          color: #3498db; /* Icon color */
          font-size: 1.5rem; /* Icon size */
        }

        p {
          margin: 0; /* Remove default margin from paragraphs */
        }
      `}</style>
      <div className="about-container">
        <h2 className='text-center'>About Me</h2>

        {/* Introduction */}
        <div className="about-item">
          <FontAwesomeIcon icon={faUser} className="about-icon" />
          <p>
            Hi, I'm Mlekwa, a passionate Software Engineer with expertise in full-stack development. I specialize in building high-quality, scalable web and mobile applications that solve real-world problems.
          </p>
        </div>

        {/* Background */}
        <div className="about-item">
          <FontAwesomeIcon icon={faBriefcase} className="about-icon" />
          <p>
            Although I don't have formal experience in software development yet, I have worked on various personal and academic projects, from e-commerce platforms to microfinance apps. My journey in software development started with [mention how you started], and I've been honing my skills across several programming languages and frameworks.
          </p>

        </div>

        {/* Current Focus */}
        <div className="about-item">
          <FontAwesomeIcon icon={faCode} className="about-icon" />
          <p>
            Currently, I’m focused on building robust and scalable solutions using React.js, Node.js, and Django, while continuously learning new technologies to stay ahead in the fast-evolving tech industry. I’m passionate about solving complex problems and creating intuitive user experiences.
          </p>
        </div>

        {/* Fun Fact or Personal Note */}
        <div className="about-item">
          <FontAwesomeIcon icon={faCoffee} className="about-icon" />
          <p>
            When I'm not coding, you can find me software development. I believe in lifelong learning and continuously improving my craft.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
