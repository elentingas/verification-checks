import React from "react";
import VerificationCard from "./UIKit/VerificationCard";
import Button, { buttonTypes } from "./UIKit/Button";
import translations from "./assets/dictionaries/en";
import Condition from "utils/Condition";
import { useVerifications } from "context";
import "./styles.css";

export default function App() {
  const {
    isSubmitAllowed,
    performCheck,
    verificationManipulationData,
    errorResponse,
  } = useVerifications();

  return (
    <div className="App">
      <Condition
        condition={verificationManipulationData.length}
        showError={!!errorResponse}
        positive={
          <>
            {verificationManipulationData?.map((item) => {
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
                />
              );
            })}
            <Button disabled={!isSubmitAllowed} type={buttonTypes.SUBMIT}>
              {translations.submit}
            </Button>
          </>
        }
      />
    </div>
  );
}
