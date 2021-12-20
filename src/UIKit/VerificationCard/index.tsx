import React from "react";
import Button, { buttonTypes } from "UIKit/Button";
import Text from "UIKit/Text";
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
}

const VerificationCardProps: React.FunctionComponent<VerificationCardProps> = ({
  description,
  answer,
  isCheckAllowed,
  id,
  performCheck,
}) => {
  return (
    <div className={`VerificationCard`}>
      <Text>{description}</Text>
      <ButtonPair
        left={
          <Button
            onClick={() => {
              isCheckAllowed && performCheck && performCheck(id, "Yes");
            }}
            type={answer === "Yes" ? buttonTypes.PRIMARY : buttonTypes.OUTLINED}
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
          >
            {translations.no}
          </Button>
        }
      />
    </div>
  );
};

export default VerificationCardProps;
