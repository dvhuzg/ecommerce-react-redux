import React from "react";
import styles from "./Button.module.scss";
type TProps = {
  text?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "submit";
  icon?: string;
};

export const Button: React.FC<TProps> = ({ text, onClick, type, icon }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.btn} type={type}>
        {icon !== "" ? <i className={icon}></i> : ""}
        {text}
      </button>
    </div>
  );
};
