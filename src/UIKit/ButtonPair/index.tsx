import React from "react";
import "./styles.css";

interface ButtonPairProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const ButtonPair: React.FunctionComponent<ButtonPairProps> = ({
  left,
  right,
}) => {
  return (
    <div className={`Button-Pair`}>
      {left}
      <div className={`Button-Pair--separator`} />
      {right}
    </div>
  );
};

export default ButtonPair;
