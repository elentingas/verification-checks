import React from "react";
import VerificationCard from "./UIKit/VerificationCard";
import Button, { buttonTypes } from "./UIKit/Button";
import translations from "./assets/dictionaries/en";
import Condition from "utils/Condition";
import { useVerifications } from "context";
import "./styles.css";

export default function App() {
  const { verificationResults, verificationChecks, errorResponse } =
    useVerifications();

  return (
    <div className="App">
      <Condition
        condition={verificationChecks.length}
        showError={!!errorResponse}
        positive={
          <>
            {verificationChecks?.map((item) => {
              return <VerificationCard key={item.id} text={item.description} />;
            })}
            <Button disabled type={buttonTypes.SUBMIT}>
              {translations.submit}
            </Button>
          </>
        }
      />
    </div>
  );
}
