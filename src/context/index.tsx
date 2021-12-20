import React, { useContext, createContext } from "react";
import { fetchChecks, submitCheckResults } from "api";
import { VerificationCheck } from "models/VerificationCheck";
import { VerificationResult } from "models/VerificationResult";
import { ErrorResponse } from "models/ErrorResponse";

const VerificationsContext = createContext({
  verificationChecks: [] as VerificationCheck[],
  verificationResults: [] as VerificationResult[],
  errorResponse: null as ErrorResponse | null,
  submitVerificationResults: (v: VerificationResult[]): void => {},
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

  React.useEffect(() => {
    fetchChecks()
      .then((result) => {
        setErrorResponse(null);
        let verifications = result as VerificationCheck[];
        setVerificationChecks(
          verifications?.sort((checkA, checkB) => {
            return checkB.priority - checkA.priority;
          })
        );
      })
      .catch((error) => {
        setErrorResponse(error as ErrorResponse);
      });
  }, []);

  const submitVerificationResults = (
    verificationResults: VerificationResult[]
  ) => {
    submitCheckResults(verificationResults)
      .then((success) => {
        setErrorResponse(null);
        console.log(success);
      })
      .catch((error) => setErrorResponse(error as ErrorResponse));
  };

  return (
    <VerificationsContext.Provider
      value={{
        submitVerificationResults,
        verificationChecks,
        verificationResults,
        errorResponse,
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
