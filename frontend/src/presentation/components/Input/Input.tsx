import React from "react";
type TProps = {
  type?: string;
  id?: string;
};
const Input: React.FC<TProps> = ({ type, id }) => {
  return <input type={type} id={id} />;
};

export default Input;
