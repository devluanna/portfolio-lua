'use client'

import TagIcon from "../icon-tag/icon-tag";

import './label-tag-gradient.scss';

interface LabelTagGradientProps {
  gradient: string;
  width: string;
  label: string;
}

const LabelTagGradient: React.FC<LabelTagGradientProps> = ({ gradient, width, label}) => {
  const gradientStyle = {
    background: gradient,
    width,
  };


  return (

    <div className="label-tag-gradient" style={gradientStyle}>
      <TagIcon/>  {label}
   
    </div>
  );
};

export default LabelTagGradient;