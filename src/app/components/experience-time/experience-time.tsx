import "./experience-time.scss"

import { Skills } from "../skills/skills"

export function Experience(){
    return(
        <div className="experience">
        <Skills image="/java.png" level={1} years="+1 year"/>
        <Skills image="/javascript.png" level={3} years="2 years"/>
        <Skills image="/react.png" level={2} years="1 year"/>
        <Skills image="/html.png" level={4} years="+3 years"/>
        <Skills image="/css.png" level={5} years="+3 years"/>
        </div>
    )
}