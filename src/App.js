import React, { useState } from 'react';
import './App.css';
import Home from './containers/homepage';
import Portfolio from './containers/portifoliopage';
import Contact from './containers/contactpage';
import Skills from './containers/skillspage';
import About from './containers/about';
import Navbar from './components/navbar';

function App() {
    const [activeSection, setActiveSection] = useState('home'); // Default to home
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu state
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'about':
                return <About />;
            case 'skills':
                return <Skills />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App">
            <Navbar 
                setActiveSection={setActiveSection} 
                isMobileMenuOpen={isMobileMenuOpen} 
                toggleMobileMenu={toggleMobileMenu} 
            />
            {renderSection()}
        </div>
    );
}

export default App;
