import React from "react";
import ReactLoading from "react-loading";
import Text, { textTypes } from "UIKit/Text";
import translations from "../../assets/dictionaries/en";
import "./styles.css";

interface Props {
  condition: any;
  positive: any;
  negative?: any;
  showError?: boolean;
}

const Condition: React.FunctionComponent<Props> = ({
  condition,
  positive,
  negative,
  showError,
}) => {
  const LOADER_COLOR = "cyan";
  if (condition) return positive;
  return (
    negative || (
      <div className="Condition">
        {showError && (
          <Text type={textTypes.ERROR}>{translations.errorText}</Text>
        )}
        <ReactLoading type={"spinningBubbles"} color={LOADER_COLOR} />
      </div>
    )
  );
};

export default Condition;
