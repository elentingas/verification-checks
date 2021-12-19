import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const ButtonPair = ({ left, right }) => {
  return (
    <div className={`Button-Pair`}>
      {left}
      <div className={`Button-Pair--separator`} />
      {right}
    </div>
  );
};

ButtonPair.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default ButtonPair;
