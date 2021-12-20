import React from "react";
import Button, { buttonTypes } from "UIKit/Button";
import Text, { textTypes } from "UIKit/Text";
import ButtonPair from "UIKit/ButtonPair";
import translations from "./../../assets/dictionaries/en";
import { Answer } from "../../models/VerificationManipulationData";
import "./styles.css";

interface VerificationCardProps {
  id: string;
  description: string;
  answer: Answer;
  isCheckAllowed: boolean;
  performCheck?: (id: string, answer: Answer) => void;
  active: boolean;
  setHovered: (e) => void;
  index: number;
}

const VerificationCardProps: React.FunctionComponent<VerificationCardProps> = ({
  description,
  answer,
  isCheckAllowed,
  id,
  performCheck,
  active,
  setHovered,
  index,
}) => {
  return (
    <div
      className={`VerificationCard ${active && "active"}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(undefined)}
      data-testid={`verification-${index}`}
    >
      <Text
        type={active || isCheckAllowed ? textTypes.REGULAR : textTypes.INACTIVE}
      >
        {description}
      </Text>
      <ButtonPair
        left={
          <Button
            onClick={() => {
              isCheckAllowed &&
                answer !== "Yes" &&
                performCheck &&
                performCheck(id, "Yes");
            }}
            type={answer === "Yes" ? buttonTypes.PRIMARY : buttonTypes.OUTLINED}
            data-testid={`click-yes-${index}`}
          >
            {translations.yes}
          </Button>
        }
        right={
          <Button
            onClick={() => {
              isCheckAllowed && performCheck && performCheck(id, "No");
            }}
            type={answer === "No" ? buttonTypes.PRIMARY : buttonTypes.OUTLINED}
            data-testid={`click-no-${index}`}
          >
            {translations.no}
          </Button>
        }
      />
    </div>
  );
};

export default VerificationCardProps;
