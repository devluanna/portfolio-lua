// Components
import { useState } from 'react';

import { Education } from "../education/education"
import { Experience } from "../experience-time/experience-time"
import { OthersExperience } from "../others-experience/others-experience"

import BoxHeader from "../info/box-header"

// Styles
import "./screen-start.scss"
import { Bagdes } from "../my-badges-aws/badges"
import { Social } from "../social/social"

import { Projects } from '../my-projects/projects';
import {MyCertificates} from '../my-certificates/my-certificates';
import { Informations } from '../informations/informations';


export function Start() {
    const [componentType, setComponentType] = useState<string | null>(null);
    const [showDefaultContent, setShowDefaultContent] = useState(true);
  
    const handleButtonClick = (type: string) => {
      setComponentType(type);
      setShowDefaultContent(false); // Oculta o conteúdo padrão quando um botão é clicado
    };
  
    const renderDynamicComponent = () => {
      switch (componentType) {
        case 'certificate':
          return <MyCertificates />;
        case 'about':
          return <Projects />;
        case 'home':
          return <Start />;
        default:
          return null;
      }
    };
  
    return (
      <div className="container-page">
        {showDefaultContent && (
          <>
            <BoxHeader onButtonClick={handleButtonClick} width="100%" height="320px" label="developer.exe">
              <Informations />
            </BoxHeader>
  
            <div className="box-experience">
              <div className="title-skills">
                Full Stack Skills
                <Experience />
              </div>
  
              <div className="box-education">
                <Education />
                <Bagdes />
  
                <div className="box-social">
                  <Social />
                </div>
              </div>
            </div>
  
            <OthersExperience />
          </>
        )}
  
        {renderDynamicComponent()}
      </div>
    );
  }