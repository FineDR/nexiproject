import React from 'react';
import { CButton, CCol, CRow, CContainer } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'; // Importing icons

function Home() {
    return (
        <section id="home">
            <style>{`
                h2, h3 {
                    color: #FFD700; /* Bright Yellow for headings */
                    font-family: 'Roboto', sans-serif; /* Font family for headings */
                }

                p {
                    margin: 0; /* Remove default margin from paragraphs */
                    text-align: center; /* Center text */
                }

                .icon-text {
                    display: flex; /* Align icon and text horizontally */
                    align-items: center; /* Center vertically */
                    margin: 0.5rem 0; /* Space between icon and text */
                    justify-content: center; /* Center icon-text pair */
                }

                .icon-text .icon {
                    margin-right: 0.5rem; /* Space between icon and text */
                    color: #FFD700; /* Color for icons */
                }

                .button-container {
                    display: flex; /* Use flexbox for centering */
                    justify-content: center; /* Center the button horizontally */
                }
            `}</style>
            <div className="container justify-content-center">
                <CContainer className='mt-4 pt-4'>
                    <CCol className='mt-4 pt-4'>
                        <CRow>
                            <h1 className='text-center fs-3'>Hi, I'm KULULINDA MLEKWA</h1>
                        </CRow>
                        <CRow className='mt-3'>
                            <h2 className='text-center'>A Passionate Software Engineer and Full Stack Developer</h2>
                        </CRow>
                        <CRow className='mt-4 text-center'>
                            <div className="icon-text">
                                <FontAwesomeIcon icon={faCode} className="icon" />
                                <p>Turning ideas into elegant code solutions.</p>
                            </div>
                            <div className="icon-text">
                                <FontAwesomeIcon icon={faMobileAlt} className="icon" />
                                <p>Specializing in building scalable web and mobile applications.</p>
                            </div>
                        </CRow>
                        <CRow className='mt-4 p-4 button-container'>
                            <CButton style={{ backgroundColor: '#1e90ff', borderColor: '#1e90ff',width:'120px' }}>
                                Contact Me
                            </CButton>
                        </CRow>
                    </CCol>
                </CContainer>
            </div>
        </section>
    );
}

export default Home;
