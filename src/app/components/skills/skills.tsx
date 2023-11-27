import Image from "next/image"

import "./skills.scss"

interface SkillProps {
    image: string,
    years: string,
    level: number,
}

export function Skills(props : SkillProps){
    return(
        <div className="my-technologies">
            <Image
                src={props.image}
                alt="Skill Logo"
                width={40}
                height={40}
                priority
            />
            <div className="container-experience">
                <div className={`experience-level level-${props.level}`}>
                    <span>{props.years}</span>
                </div>
            </div>
      </div>
    )
}