import React from "react";
import "./styles.css";

export const buttonTypes = {
  PRIMARY: "Primary",
  OUTLINED: "Outlined"
}

interface ButtonProps {
  children: any
  disabled?: boolean
  onClick?: (e: any) => any
  type?: string

}

const Button: React.FunctionComponent<ButtonProps> = ({ 
  children, 
  type = buttonTypes.PRIMARY,
   ...rest }
   ) => {
  return (
    <button className={`Button ${type}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
