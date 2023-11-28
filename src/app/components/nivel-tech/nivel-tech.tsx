'use client'

import "./nivel-tech.scss";

interface Level {
    level: number;
    width: string;
    color: string;
  }
  
  interface NivelTechProps {
    levels: Level[];
  }
  
  export function NivelTech({ levels }: NivelTechProps) {
    return (
      <div className="container-level">
        {levels.map((level) => (
          <div
            key={`level-${level.level}`}
            className={`level-tech level-${level.level} sub-level-${level.level}`}
            style={{
              width: level.width,
              backgroundColor: level.color,
            }}
          ></div>
        ))}
      </div>
    );
  }