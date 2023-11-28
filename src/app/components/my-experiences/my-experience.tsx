import { PrimaryExperience } from "../primary-experience/primary-experience"
import { SecondaryExperience } from "../secondary-experience/secondary-experience"
import "./my-experience.scss"

export function MyExperience(){
    return (
        <div className="container-page">
            <div className="title-page">
                My experiences
            </div>
        
               
                <PrimaryExperience/>
                <SecondaryExperience/>
        </div>
    )
}