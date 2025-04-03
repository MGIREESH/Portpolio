import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Section from './components/Section';
import AIAssistant from './components/AIAssistant';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      
      <Section 
        id="about"
        title="About Me"
        content={
          <div className="card-container two-column">
            <div className="card">
              <h3>Who I Am</h3>
              <p>Welcome to my portfolio. I am Mada Gireesh, a professional with expertise in web development, software engineering, and creative design. With a passion for creating innovative solutions, I strive to deliver high-quality work that exceeds expectations.</p>
            </div>
            <div className="card">
              <h3>My Journey</h3>
              <p>My journey in the tech industry began several years ago, and since then, I've had the opportunity to work on diverse projects across various domains. I believe in continuous learning and staying updated with the latest technologies and trends in the industry.</p>
            </div>
          </div>
        }
      />
      
      {/* Additional sections */}
      <Section id="skills" title="Skills" content={/* Your skills content */} />
      <Section id="projects" title="Projects" content={/* Your projects content */} />
      <Section id="certificates" title="Certificates" content={/* Your certificates content */} />
      <Section id="achievements" title="Achievements" content={/* Your achievements content */} />
      
      <AIAssistant />
      
      <Section id="contact" title="Contact Information" content={/* Your contact content */} />
    </div>
  );
}

export default App; 