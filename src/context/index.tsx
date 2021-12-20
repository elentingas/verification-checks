import React, { useContext, createContext } from "react";
import { fetchChecks, submitCheckResults } from "api";
import { VerificationCheck } from "models/VerificationCheck";
import { VerificationResult } from "models/VerificationResult";
import {
  VerificationManipulationData,
  Answer,
} from "models/VerificationManipulationData";
import { ErrorResponse } from "models/ErrorResponse";

const VerificationsContext = createContext({
  verificationChecks: [] as VerificationCheck[],
  verificationResults: [] as VerificationResult[],
  verificationManipulationData: [] as VerificationManipulationData[],
  errorResponse: null as ErrorResponse | null,
  submitVerificationResults: (v: VerificationResult[]): void => {},
  isSubmitAllowed: false as boolean,
  performCheck: (id: string, a: Answer): void => {},
});

export function VerificationsContextProvider({ children }) {
  const [verificationChecks, setVerificationChecks] = React.useState<
    VerificationCheck[]
  >([]);
  const [verificationResults, setVerificationResults] = React.useState<
    VerificationResult[]
  >([]);
  const [errorResponse, setErrorResponse] =
    React.useState<ErrorResponse | null>(null);

  const [verificationManipulationData, setVerificationManipulationData] =
    React.useState<VerificationManipulationData[]>([]);

  const [isSubmitAllowed, setIsSubmitAllowed] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchChecks()
      .then((result) => {
        setErrorResponse(null);
        let verifications = result as VerificationCheck[];
        let sortedVerifications = verifications?.sort((checkA, checkB) => {
          return checkB.priority - checkA.priority;
        });
        setVerificationChecks(sortedVerifications);
        populateManipulationData(sortedVerifications);
      })
      .catch((error) => {
        setErrorResponse(error as ErrorResponse);
      });
  }, []);

  const submitVerificationResults = (
    verificationResults: VerificationResult[]
  ) => {
    if (isSubmitAllowed) {
      submitCheckResults(verificationResults)
        .then((success) => {
          setErrorResponse(null);
          console.log(success);
        })
        .catch((error) => setErrorResponse(error as ErrorResponse));
    }
  };

  const populateManipulationData = (sortedVerifications) => {
    setVerificationManipulationData(
      sortedVerifications.map((item, index) => {
        return {
          ...item,
          isCheckAllowed: index === 0, // allow only for the first item
          answer: null,
        };
      })
    );
  };

  const performCheck = (id: string, answer: Answer) => {
    let indexOfItem;
    if (answer === "Yes") {
      setVerificationManipulationData(
        verificationManipulationData.map((item, index) => {
          if (item.id === id) {
            indexOfItem = index;
            // if it's the last Yes, then allow to Submit. If not, then disable Submit
            setIsSubmitAllowed(
              indexOfItem === verificationManipulationData.length - 1
            );
            return {
              ...item,
              answer: "Yes",
            };
          } else if (indexOfItem !== undefined && indexOfItem === index - 1) {
            // enable check for next item
            return {
              ...item,
              isCheckAllowed: true,
            };
          }
          return {
            ...item,
          };
        })
      );
    } else if (answer === "No") {
      setVerificationManipulationData(
        verificationManipulationData.map((item, index) => {
          if (item.id === id) {
            indexOfItem = index;
            return {
              ...item,
              answer: "No",
            };
          } else if (indexOfItem !== undefined && indexOfItem < index) {
            // if it's a No, then clear everything after it
            return {
              ...item,
              answer: null,
              isCheckAllowed: false,
            };
          }
          return {
            ...item,
          };
        })
      );
      setIsSubmitAllowed(true);
    }
  };

  return (
    <VerificationsContext.Provider
      value={{
        submitVerificationResults,
        performCheck,
        verificationChecks,
        verificationResults,
        errorResponse,
        verificationManipulationData,
        isSubmitAllowed,
      }}
    >
      {children}
    </VerificationsContext.Provider>
  );
}

export function useVerifications() {
  const context = useContext(VerificationsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export default VerificationsContext;
