'use client'

import TagIcon from '../icon-tag/icon-tag';
import './label-tag.scss';

interface TagProps {
  color: string;
  label: string;
  width:string;
}

export function LabelTag({ color, label, width}: TagProps) {

  return (
    <div className="container">
      <div className="label-tag" style={{ backgroundColor: color, width: width }}>
      <TagIcon/> {label} 
      </div>
    
    </div>
  );
}