'use client'
import ExpandIcon from "../icon-expand/icon-expand"
import LabelTagGradient from "../label-tag-gradient/label-tag-gradient";
import { LabelTag } from "../label-tag/label-tag";
import { LegendLanguage } from "../legend-language/legend-languaga";
import { NivelTech } from "../nivel-tech/nivel-tech"


const levelsData = [
    { level: 1, width: '100%', color: '#A8531E' },
    { level: 2, width: '0', color: '' },
    { level: 3, width: '0', color: '' },
  ];

export function ProjectFive(){
    return(

        <div className="box-section">

        <div className="title-project">   
        to-do-list-rocketseat

        <div className="box-labels">   
        <LabelTag color="#7F2525" width="80px"  label="java" />
        <LabelTag color="#308D2E" width="130px"  label="springboot" />
        <LabelTagGradient gradient="radial-gradient(circle, rgba(251,63,155,1) 0%, rgba(252,134,70,1) 100%)" width="100px" label="maven" />
        </div>

        </div>
        
        <div className="box-general">

        <div className="description-project">Task Manager: To-Do-List for the Course Creation of a Java application with Spring Boot from the company
        Rocketseat!
  
      </div>

               
      <div className="box-techs">
      <NivelTech levels={levelsData} />
      </div>
      </div>
      <div className="legends-techs">

      <LegendLanguage color="#A8531E" label="Java 100%" />
      </div>


      <a  href="https://github.com/devluanna/ToDoList" className="btn-button">view repository  <ExpandIcon/></a>
        </div>
   
   
    )
}