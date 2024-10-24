import React from 'react';
import { CCard, CCardBody, CCardHeader, CCardImage, CRow, CCol } from '@coreui/react';

// Import images at the top of the file
import project1Image from '../assets/picha.jpg'; // Adjust path as necessary
import project2Image from '../assets/picha2.jpg'; // Adjust path as necessary
import project3Image from '../assets/picha.jpg'; // Same image for demonstration

function Portfolio() {
  const projects = [
    {
      name: "Udom Conference Site",
      description: "A responsive UDOM Scientific Conference on Health (USCHe) website built with React.js",
      image: project1Image,
      projectLink: "https://uscheapp.web.app/",
      githubLink: "https://github.com/username/project1",
    },
    {
      name: "Student Support Information System",
      description: "A responsive Student Support System website built with React.js & Django",
      image: project2Image,
      projectLink: "https://ssis-d1204.web.app",
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Microfinance Web App",
      description: "A microfinance web app using Django and React.js for customer loan management.",
      image: project3Image,
      projectLink: "https://uscheapp.web.app/",
      githubLink: "https://github.com/username/project3",
    },
  ];

  const styles = {
    section: {
      padding: '2rem 0',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem', // Add horizontal padding for mobile responsiveness
    },
    header: {
      textAlign: 'center',
      marginBottom: '1rem',
      fontSize: '2rem',
    },
    cardHeader: {
      textAlign: 'center',
      fontSize: '1.5rem',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
  };

  return (
    <section id="portfolio" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.header}>My Portfolio</h2>
        <CRow>
          {projects.map((project, index) => (
            <CCol xs="12" sm="6" md="4" key={index} className="mb-4">
              <CCard>
                <CCardHeader style={styles.cardHeader} className='p-4'>
                  {project.name}
                </CCardHeader>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <CCardImage
                    src={project.image}
                    alt={`${project.name} Image`}
                    style={styles.cardImage}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset to original scale
                  />
                </a>
                <CCardBody className='p-4'>
                  <p>{project.description}</p>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </div>
    </section>
  );
}

export default Portfolio;
