// Components
import { useState, useEffect } from 'react';

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
  
  const [componentType, setComponentType] = useState<string | null>('home');
  const [showDefaultContent, setShowDefaultContent] = useState(true);
  const [selectedButtonType, setSelectedButtonType] = useState<string | null>('home');
  const [boxHeaderLabel, setBoxHeaderLabel] = useState<string>('developer.exe');

  const [boxHeaderHeight, setBoxHeaderHeight] = useState<string>('320px');


  const handleButtonClick = (type: string, label?: string, height?: string) => {
    setComponentType(type);
    setSelectedButtonType(type);
    if (label) {
      setBoxHeaderLabel(label);
    }
    if (height) {
      setBoxHeaderHeight(height);
    }
    
  };


  const renderDynamicComponent = () => {
    switch (componentType) {
      case 'certificate':
        return <MyCertificates />;
      case 'about':
        return <Projects />;
      case 'home':
      default:
        return <Informations />;
    }
  };

  useEffect(() => {
    if (componentType === 'certificate' || componentType === 'about') {
      setShowDefaultContent(false);
    } else {
      setShowDefaultContent(true);
    }
  }, [componentType]);


  return (
    <div className="container-page">
       
      <BoxHeader
      onButtonClick={(type, label, height) => handleButtonClick(type, label, height)}
      selectedButtonType={selectedButtonType}
      width="100%"
      height={boxHeaderHeight}
      label={boxHeaderLabel}>
      {renderDynamicComponent()}
     </BoxHeader>

     {showDefaultContent && (
        <>
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
    </div>
  );
}