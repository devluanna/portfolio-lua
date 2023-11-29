import ExpandIcon from "../icon-expand/icon-expand"
import { LabelTag } from "../label-tag/label-tag";
import { LegendLanguage } from "../legend-language/legend-languaga";
import { NivelTech } from "../nivel-tech/nivel-tech"


const levelsData = [
    { level: 1, width: '100%', color: '#A8531E' },
    { level: 2, width: '0', color: '' },
    { level: 3, width: '0', color: '' },
  ];

export function ProjectFour(){
    return(

        <div className="box-section">

        <div className="title-project">   
        api-reactgram
        <div className="box-labels">   
        <LabelTag color="#7F2525" width="80px"  label="java" />
        <LabelTag color="#308D2E" width="130px"  label="springboot" />
        <LabelTag color="#083D3C" width="130px"  label="gradle" />
        </div>
        </div>
        <div className="box-general">

        <div className="description-project">This project was developed for the React.JS course made by Matheus Battisti,
        where in the backend he used Node.js and Express to develop the API. How am I improving my backend knowledge and studying Java, I developed the API with Java.
  
      </div>

               
      <div className="box-techs">
      <NivelTech levels={levelsData} />
      </div>
      </div>
      <div className="legends-techs">

      <LegendLanguage color="#A8531E" label="Java 100%" />
      </div>

      <a  href="https://github.com/devluanna/project-reactgram" className="btn-button">view repository  <ExpandIcon/></a>
   
        </div>
   
   
    )
}