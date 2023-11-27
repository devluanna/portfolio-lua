'use client'
import Image from 'next/image'

//Components
import { Start } from './components/screen-start/screen-start'

//Styles home
import "./styles-home/home.scss"
import { FaChevronDown } from 'react-icons/fa';
import { MyExperience } from './components/my-experiences/my-experience';


export default function Home() {
  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById('experiences-section');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="home-container">

      <Start/>

      <div className="scroll-indicator" onClick={scrollToExperiences}>
        <FaChevronDown />
      </div>

      <div id="experiences-section">
    <MyExperience/>
    </div>

    <div className='footer-gradient'></div>

    </main>
  )
}
