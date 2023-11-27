// Components
import { Education } from "../education/education"
import { Experience } from "../experience-time/experience-time"
import { OthersExperience } from "../others-experience/others-experience"

import BoxHeader from "../info/box-header"

// Styles
import "./screen-start.scss"
import { Bagdes } from "../my-badges-aws/badges"
import { Social } from "../social/social"


export function Start(){
    return(
        <div className="container-page">

            <BoxHeader/>

            <div className="box-experience">

            <div className="title-skills">
                Full Stack Skills
            <Experience/>
            </div>

            <div className="box-education">
                <Education/>
                <Bagdes/>

            <div className="box-social">
        
        
            <Social/>
        </div>
            </div>

        </div>

        <OthersExperience/>

        </div>

        
    )
}