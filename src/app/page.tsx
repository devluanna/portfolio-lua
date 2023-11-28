'use client';

import Image from 'next/image'

import { FaChevronDown } from 'react-icons/fa';
import { Start } from './components/screen-start/screen-start';
import { MyExperience } from './components/my-experiences/my-experience';
import { Projects } from './components/my-projects/projects';
import "./styles-home/home.scss";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <main className="home-container">
      <Start />

      <div className="scroll-indicator" onClick={() => scrollToSection('experiences-section')}>
        <FaChevronDown />
      </div>

      <div id="experiences-section">
      <MyExperience />
      </div>

      <div id="projects-section">
      <Projects />
      </div>

    </main>
  );
}