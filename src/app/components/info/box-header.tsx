'use client';

import Image from 'next/image';
import "./box-header.scss";
import Button from '../buttons-menu/Button';

interface BoxHeaderProps {
  onButtonClick: (type: string) => void;
  width: string;
  height: string;
  label: string;
  children?: React.ReactNode;
}

const BoxHeader: React.FC<BoxHeaderProps> = ({ onButtonClick, width, height, children, label }) => {
  return (
      <div className="box-header" style={{ width, height }}>
  
      <div className="line" >
        <span>{label}</span>

        <div className="box-buttons">
          <Button onClick={() => onButtonClick('certificate')} buttonType="certificate" sizeFont="15px" name="_" />
          <Button onClick={() => onButtonClick('about')} buttonType="about" sizeFont="15px" name="🌙" />
          <Button onClick={() => onButtonClick('home')} buttonType="home" sizeFont="18px" name="x" />
        </div>

      </div>
      
      {children}
     
    </div>
  );
};

export default BoxHeader;