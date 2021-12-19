import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const ButtonTypes = Object.freeze({
  PRIMARY: "Primary",
  OUTLINED: "Outlined"
});

const Button = ({ children, type = ButtonTypes.PRIMARY, ...rest }) => {
  return (
    <button className={`Button ${type}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
