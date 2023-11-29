import ExpandIcon from "../icon-expand/icon-expand"
import { LabelTag } from "../label-tag/label-tag";
import { LegendLanguage } from "../legend-language/legend-languaga";
import { NivelTech } from "../nivel-tech/nivel-tech"
import "./project-one.scss"

const levelsData = [
    { level: 1, width: '93.3%', color: '#FFC61A' },
    { level: 2, width: '3.8%', color: '#e34c26' },
    { level: 3, width: '2.9%', color: '#563D7C' },
  ];

export function ProjectOne(){
    return(

        <div className="box-section">

        <div className="title-project">   
        miniBlog

        <LabelTag color="#0097B2" width="100px" label="react.js" />
        <LabelTag color="#38B6FF" width="100px" label="firebase" />
      
        </div>
        <div className="box-general">

        <div className="description-project">This project was my first, using React.JS and FIREBASE backend.
        Course miniBlog project (Create complete projects with React) on udemy by Matheus Battisti     
      </div>

               
      <div className="box-techs">
      <NivelTech levels={levelsData} />
      </div>
      </div>
      <div className="legends-techs">

      <LegendLanguage color="#FFC61A" label="Javascript 93.8%" />
      <LegendLanguage color="#e34c26" label="HTML 3.8%" />
      <LegendLanguage color="#563D7C" label="CSS 2.9%" />
      </div>

      <a  href="https://github.com/devluanna/miniBlog" className="btn-button">view repository  <ExpandIcon/></a>
   
        </div>
   
   
    )
}