import React from "react";
import VerificationCard from "./UIKit/VerificationCard";
import Button, { buttonTypes } from "./UIKit/Button";
import translations from "./assets/dictionaries/en";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <VerificationCard text="heloofk djfvn  djfvn  djfvn  djfvn  djfvn kdjvad, sdm" />
      <VerificationCard text="heloofk djfvn  djfvn  djfvn  djfvn  djfvn kdjvad, sdm" />
      <VerificationCard text="heloofk djfvn  djfvn  djfvn  djfvn  djfvn kdjvad, sdm" />
      <Button disabled type={buttonTypes.SUBMIT}>
        {translations.submit}
      </Button>
    </div>
  );
}
