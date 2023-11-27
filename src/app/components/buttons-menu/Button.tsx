'use client'

import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  buttonType: string;
  sizeWidth?: string;
  sizeHeight?: string;
  sizeFont?: string;
  weightFont?: string;
  name: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const getButtonStyle = () => {
    switch (props.buttonType) {
      case "certificate":
        return styles.certificate;
        case "about":
          return styles.about;
          case "home":
            return styles.home;
      default:
        return styles.default;
    }
  };

  return (
    <button
      className={`${styles.button} ${getButtonStyle()}`}
      onClick={props.onClick}
      type="button"
      style={{
        fontSize: props.sizeFont || "12px",
      }}
    >
      {props.name}
    </button>
  );
};

export default Button;
