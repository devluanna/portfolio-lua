'use client'
import ExpandIcon from "../icon-expand/icon-expand"
import LabelTagGradient from "../label-tag-gradient/label-tag-gradient";
import { LabelTag } from "../label-tag/label-tag";
import { LegendLanguage } from "../legend-language/legend-languaga";
import { NivelTech } from "../nivel-tech/nivel-tech"


const levelsData = [
    { level: 1, width: '59.2%', color: '#3171BC' },
    { level: 2, width: '40.7%', color: '#C5528A' },
    { level: 3, width: '0.1%', color: '#FFC61A' },
  ];

export function ProjectSix(){
    return(

        <div className="box-section">

        <div className="title-project">   
        portfolio-lua-dev

        <div className="box-labels">
        <LabelTag color="#0097B2" width="100px" label="react.js" />
        <LabelTag color="#1C1C1C" width="100px" label="next.js" />
        <LabelTag color="#3171BC" width="120px"  label="typescript" />
        <LabelTag color="#C5528A" width="100px"  label="SCSS" />

        </div>

        </div>
        
        <div className="box-general">

        <div className="description-project">Creation of my portfolio (this one lol), using new technologies as a form of study/learning.
  
      </div>

               
      <div className="box-techs">
      <NivelTech levels={levelsData} />
      </div>
      </div>
      <div className="legends-techs">

      <LegendLanguage color="#3171BC" label="Typescript 59.2" />
      <LegendLanguage color="#C5528A" label="SCSS 40.7%" />
      <LegendLanguage color="#FFC61A" label="Javascript 0.1%" />
      </div>

      <a  href="https://github.com/devluanna/portfolio-lua" className="btn-button">view repository  <ExpandIcon/></a>
   
        </div>
   
   
    )
}