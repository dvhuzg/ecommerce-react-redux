import React from "react";
type TProps = {
  type?: string;
  id?: string;
};
const Input: React.FC<TProps> = ({ type, id }) => {
  return (
    <div>
      <input type={type} id={id} />
    </div>
  );
};

export default Input;
