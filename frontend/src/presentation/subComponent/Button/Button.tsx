import React from "react";
import styles from "./Button.module.scss";
type TProps = {
  text?: string;
  onClick?: (event: any) => void;
};
export const Button: React.FC<TProps> = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.style}>
        {text}
      </button>
    </div>
  );
};
