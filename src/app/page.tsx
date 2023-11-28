'use client';

import Image from 'next/image'

// Icons
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';

// Components
import { Start } from './components/screen-start/screen-start';
import { MyExperience } from './components/my-experiences/my-experience';
import { Projects } from './components/my-projects/projects';

// Styles
import "./styles-home/home.scss";

export default function Home() {

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [currentSection, setCurrentSection] = useState('experiences-section');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId); 
    }
  };


  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showDown = scrollY < window.innerHeight; 
    const showTop = scrollY > 200;
    setShowScrollDown(showDown);
    setShowScrollTop(showTop);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  
  return (
    <main className="home-container">
      <Start />
      
      {showScrollDown && (
      <div className="scroll-indicator" onClick={() => scrollToSection('experiences-section')}>
        <FaChevronDown />
      </div>
        )}

      <div id="experiences-section">
      <MyExperience />
      </div>

      <div id="projects-section">
      <Projects />
      </div>

    
      {showScrollTop && (
        <div className="scroll-top" onClick={scrollToTop}>
          <FaChevronDown />
        </div> 
      )}

    </main>
  );
}