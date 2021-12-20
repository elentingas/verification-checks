import React from "react";
import "./styles.css";

export const textTypes = {
  REGULAR: "Text-regular",
  ERROR: "Text-error",
  INACTIVE: "Text-inactive",
};

interface TextProps {
  type?: string;
  children: any;
}

const Text: React.FunctionComponent<TextProps> = ({
  children,
  type = textTypes.REGULAR,
  ...rest
}) => {
  return (
    <span className={`${type}`} {...rest}>
      {children}
    </span>
  );
};

export default Text;
