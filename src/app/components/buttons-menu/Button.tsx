'use client'
import { useState, useEffect } from 'react';
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  buttonType: string;
  sizeWidth?: string;
  sizeHeight?: string;
  sizeFont?: string;
  weightFont?: string;
  name: string;
  selected: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(props.selected);
  }, [props.selected]);

  const getButtonStyle = () => {
    switch (props.buttonType) {
      case 'certificate':
        return styles.certificate;
      case 'about':
        return styles.about;
      case 'home':
        return styles.home;
      default:
        return styles.default;
    }
  };

  const getButtonColor = () => {
    if (clicked) {
      return { backgroundColor: '#fff', color: '#2C2C2C', fontWeight: '600' };
    }
    return {};
  };

  const handleClick = () => {
    setClicked(true);
    props.onClick();
  };

  return (
    <button
      className={`${styles.button} ${getButtonStyle()}`}
      onClick={handleClick}
      type="button"
      style={{
        fontSize: props.sizeFont || '12px',
        ...getButtonColor(),
      }}
    >
      {props.name}
    </button>
  );
};

export default Button;