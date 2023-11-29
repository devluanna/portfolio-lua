import ExpandIcon from "../icon-expand/icon-expand"
import { LabelTag } from "../label-tag/label-tag";
import { LegendLanguage } from "../legend-language/legend-languaga";
import { NivelTech } from "../nivel-tech/nivel-tech"

const levelsData = [
    { level: 1, width: '97.2%', color: '#FFC61A' },
    { level: 2, width: '2.0%', color: '#e34c26' },
    { level: 3, width: '0.8%', color: '#563D7C' },
  ];

export function ProjectTwo(){
    return(

        <div className="box-section">

        <div className="title-project">   
        reactgram-front

        <LabelTag color="#0097B2" width="100px" label="react.js" />
      
        </div>
        <div className="box-general">

        <div className="description-project">This is the Front-End project of an API (api-reactgram) made in Java.
        This project was created and modified while studying Matheus Battisti's React course: a social network for sharing photos.     
      </div>

               
      <div className="box-techs">
      <NivelTech levels={levelsData} />
      </div>
      </div>
      <div className="legends-techs">

      <LegendLanguage color="#FFC61A" label="Javascript 97.2%" />
      <LegendLanguage color="#e34c26" label="HTML 2.0%" />
      <LegendLanguage color="#563D7C" label="CSS 0.8%" />
      </div>

      <a  href="https://github.com/devluanna/reactgram-front" className="btn-button">view repository  <ExpandIcon/></a>
   
        </div>
   
   
    )
}