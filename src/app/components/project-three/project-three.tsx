import ExpandIcon from "../icon-expand/icon-expand"
import { LabelTag } from "../label-tag/label-tag";
import { LegendLanguage } from "../legend-language/legend-languaga";
import { NivelTech } from "../nivel-tech/nivel-tech"
import "./project-three.scss"

const levelsData = [
    { level: 1, width: '100%', color: '#A8531E' },
    { level: 2, width: '0', color: '' },
    { level: 3, width: '0', color: '' },
  ];

export function ProjectThree(){
    return(

        <div className="box-section">

        <div className="title-project">   
        santander-dev-week-2023
        <div className="box-labels">   
        <LabelTag color="#7F2525" width="80px"  label="java" />
        <LabelTag color="#308D2E" width="130px"  label="springboot" />
        <LabelTag color="#083D3C" width="130px"  label="gradle" />
      
        </div>  </div>
        <div className="box-general">

        <div className="description-project">Java RESTful API created for Bootcamp Santander Dev Week.  
      </div>

               
      <div className="box-techs">
      <NivelTech levels={levelsData} />
      </div>
      </div>
      <div className="legends-techs">

      <LegendLanguage color="#A8531E" label="Java 100%" />
      </div>

      <div className="btn-button">view repository  <ExpandIcon/></div>
   
        </div>
   
   
    )
}