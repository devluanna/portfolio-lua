import { ProjectFive } from "../project-five/project-five"
import { ProjectFour } from "../project-four/project-four"
import { ProjectOne } from "../project-one/project-one"
import { ProjectSix } from "../project-six/project-six"
import { ProjectThree } from "../project-three/project-three"
import { ProjectTwo } from "../project-two/project-two"
import "./projects.scss"

export function Projects(){
    return (
        <div className="container-page">

            <div className="title-page">
                Projects on Git Hub
            </div>
            
        <div className="page-projects">
        <ProjectSix/>
        <ProjectFive/>
        <ProjectFour/>
        <ProjectTwo/>
        <ProjectThree/>
        <ProjectOne/>
            
        </div>
        </div>
    )
}