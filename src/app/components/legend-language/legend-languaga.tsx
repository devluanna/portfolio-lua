'use client'

import './legend-language.scss';

interface LegendLanguageProps {
  color: string;
  label: string;
}

export function LegendLanguage({ color, label }: LegendLanguageProps) {
  return (
    <div className="container">
      <div className="legend" style={{ backgroundColor: color }}>
      </div>
      <div className="legend-title">{label}</div>
    </div>
  );
}