'use client';

import Image from 'next/image';
import "./box-header.scss";
import Button from '../buttons-menu/Button';

interface BoxHeaderProps {
  onButtonClick: (type: string, width?: string, height?: string, label?: string) => void;
  selectedButtonType: string | null;
  width: string;
  height: string;
  label: string;
  children?: React.ReactNode;
}
const BoxHeader: React.FC<BoxHeaderProps> = ({ onButtonClick, selectedButtonType, width, height, children, label }) => {
  return (
    <div className="box-header" style={{ width, height }}>
      <div className="line">
        <span>{label}</span>

        <div className="box-buttons">
        <Button
  onClick={() => onButtonClick('certificate', 'certificates.exe', '800px')}
  buttonType="certificate"
  sizeFont="15px"
  name="_"
  selected={selectedButtonType === 'certificate'}
/>
<Button
  onClick={() => onButtonClick('about', 'about.exe', '800px')}
  buttonType="about"
  sizeFont="15px"
  name="🌙"
  selected={selectedButtonType === 'about'}
/>
<Button
  onClick={() => onButtonClick('home', 'developer.exe', '320px')}
  buttonType="home"
  sizeFont="18px"
  name="x"
  selected={selectedButtonType === 'home'}
/>
        </div>
      </div>
      {children}
    </div>
  );
};

export default BoxHeader;