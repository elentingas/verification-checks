import React, { useState, useEffect } from "react";
import VerificationCard from "./UIKit/VerificationCard";
import Button, { buttonTypes } from "./UIKit/Button";
import translations from "./assets/dictionaries/en";
import Condition from "utils/Condition";
import { useVerifications } from "context";
import { useKeyPress } from "./utils/useKeyPress";
import "./styles.css";

export default function App() {
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const onePress = useKeyPress("1");
  const twoPress = useKeyPress("2");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const {
    isSubmitAllowed,
    isSubmitFetching,
    verificationManipulationData,
    errorResponse,
    performCheck,
    submitVerificationResults,
  } = useVerifications();

  useEffect(() => {
    if (verificationManipulationData.length && downPress) {
      setCursor((prevState) =>
        prevState < verificationManipulationData.length - 1
          ? prevState + 1
          : prevState
      );
    }
  }, [downPress, verificationManipulationData]);

  useEffect(() => {
    if (verificationManipulationData.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, verificationManipulationData]);

  useEffect(() => {
    if (verificationManipulationData.length && twoPress) {
      const { id, isCheckAllowed } = verificationManipulationData[cursor];
      isCheckAllowed && performCheck(id, "No");
    }
  }, [cursor, twoPress, verificationManipulationData, performCheck]);

  useEffect(() => {
    if (verificationManipulationData.length && onePress) {
      const { id, isCheckAllowed, answer } =
        verificationManipulationData[cursor];
      isCheckAllowed && answer !== "Yes" && performCheck(id, "Yes");
    }
  }, [cursor, onePress, verificationManipulationData, performCheck]);

  useEffect(() => {
    if (verificationManipulationData.length && hovered !== undefined) {
      setCursor(hovered);
    }
  }, [hovered, verificationManipulationData]);

  return (
    <div className="App">
      <Condition
        condition={verificationManipulationData.length && !isSubmitFetching}
        showError={!!errorResponse}
        positive={
          <>
            {verificationManipulationData?.map((item, index) => {
              return (
                <VerificationCard
                  key={item.id}
                  id={item.id}
                  answer={item.answer}
                  description={item.description}
                  performCheck={(id, answer) => {
                    performCheck(id, answer);
                    console.log(id, answer);
                  }}
                  isCheckAllowed={item.isCheckAllowed}
                  active={index === cursor}
                  setHovered={setHovered}
                  index={index}
                />
              );
            })}
            <Button
              onClick={() => submitVerificationResults()}
              disabled={!isSubmitAllowed}
              type={buttonTypes.SUBMIT}
            >
              {translations.submit}
            </Button>
          </>
        }
      />
    </div>
  );
}
