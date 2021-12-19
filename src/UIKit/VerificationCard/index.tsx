import React from "react";
import Button, { buttonTypes } from "UIKit/Button";
import Text from "UIKit/Text";
import ButtonPair from "UIKit/ButtonPair";
import translations from "./../../assets/dictionaries/en";
import "./styles.css";

interface VerificationCardProps {
  text: string;
  answer?: string;
}

const VerificationCardProps: React.FunctionComponent<VerificationCardProps> = ({
  text,
  answer,
}) => {
  return (
    <div className={`VerificationCard`}>
      <Text>{text}</Text>
      <ButtonPair
        left={<Button type={buttonTypes.PRIMARY}>{translations.yes}</Button>}
        right={<Button type={buttonTypes.OUTLINED}>{translations.no}</Button>}
      />
    </div>
  );
};

export default VerificationCardProps;
