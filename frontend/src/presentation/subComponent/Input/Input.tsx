import React from "react";
type TProps = {
  type?: string;
};
const Input: React.FC<TProps> = ({ type }) => {
  return (
    <div>
      <input type={type} />
    </div>
  );
};

export default Input;
