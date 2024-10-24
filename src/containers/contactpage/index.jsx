import React from 'react';
import { CButton, CCardHeader, CContainer, CForm, CFormInput, CFormTextarea, CRow, CCol } from '@coreui/react';

function ContactPage() {
  return (
    <section id="contact" style={{ padding: '2rem 0', backgroundColor: '#333' /* Dark background */ }}>
      <style>{`

        h2, h3 {
          color: #FFD700; /* Bright Yellow for headings */
          font-family: 'Roboto', sans-serif; /* Font family for headings */
        }

        p {
          margin: 0; /* Remove default margin from paragraphs */
        }
      `}</style>

      <div className="container justfy-content-center text-white">
        <h2 className='text-center'>Want to work together?</h2>
        <p className='text-center'>Feel free to send me a message or connect with me on LinkedIn, GitHub, or Twitter.</p>

        {/* Contact Form */}
        <CContainer>
          <CCol className='text-center fs-2 p-3'><h1>Contact Me</h1></CCol>
          <CRow>
            <CForm>
              <CRow className="mb-3">
                <CCol xs={12}>
                  <CFormInput
                    type="text"
                    placeholder="Your Name"
                    required
                    style={{ backgroundColor: '#555', color: '#fff', borderColor: '#777' }} // Dark form input
                  />
                  <CFormInput
                    className='mt-3'
                    type="email"
                    placeholder="Your Email"
                    required
                    style={{ backgroundColor: '#555', color: '#fff', borderColor: '#777' }} // Dark form input
                  />
                </CCol>

              </CRow>
              <CRow className="mb-3">
                <CCol xs={12}>
                  <CFormTextarea
                    placeholder="Your Message"
                    required
                    style={{ backgroundColor: '#555', color: '#fff', borderColor: '#777' }} // Dark textarea
                  ></CFormTextarea>
                </CCol>
              </CRow>
              <CButton
                type="submit"
                style={{ backgroundColor: '#555', color: '#fff', borderColor: '#777' }}
              >
                Send Message
              </CButton>
            </CForm>
          </CRow>
        </CContainer>

        {/* Contact Information */}
        <div className="contact-info mt-4">
          <CRow className="mt-4">
            <CCol xs={6} className='text-center'>
              <p style={{ margin: '0.5rem 0' }}>Email: <a href="mailto:finesawa36@gmail.com" className="text-warning">finesawa36@gmail.com</a></p>
              <p style={{ margin: '0.5rem 0' }}>Phone: 0692671206</p>
            </CCol>
            <CCol xs={6}>
              <p style={{ margin: '0.5rem 0' }}>Connect with me:
              <a href="https://github.com/FineDR" target="_blank" rel="noopener noreferrer" className="text-warning" style={{ marginRight: '0.5rem' }}> GitHub</a></p>
            </CCol>
          </CRow>

        </div>
      </div>
    </section>
  );
}

export default ContactPage;
