import React from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for smooth scrolling

function Navbar({ setActiveSection, isMobileMenuOpen, toggleMobileMenu }) {
    const handleLinkClick = (section) => {
        setActiveSection(section);
        toggleMobileMenu(); // Close the navbar when a link is clicked
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1e90ff' }}>
            <div className="container">
            <a className="navbar-brand" href="/home" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>
                    <h2>Mlekwa</h2>
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMobileMenu} // Toggle the mobile menu on button click
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="home"
                                smooth={true}
                                duration={500}
                                onClick={() => handleLinkClick('home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={() => handleLinkClick('about')}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="skills"
                                smooth={true}
                                duration={500}
                                onClick={() => handleLinkClick('skills')}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="portfolio"
                                smooth={true}
                                duration={500}
                                onClick={() => handleLinkClick('portfolio')}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => handleLinkClick('contact')}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
