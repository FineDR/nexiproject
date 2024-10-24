import React from 'react';
import Navbar from '../navbar'; // Ensure the path is correct based on your project structure

function HeaderPageContent() {
  return (
    <header className="bg-dark text-white p-4">
      <div className="container">
        <Navbar /> {/* Include the Navbar component here */}
        <h1 className="text-center mb-4">Welcome to My Portfolio</h1>
      </div>
    </header>
  );
}

export default HeaderPageContent;
