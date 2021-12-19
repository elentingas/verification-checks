import React from "react";
import Button, { buttonTypes } from "./UIKit/Button";
import Text from "./UIKit/Text";
import ButtonPair from "./UIKit/ButtonPair";
import translations from "./assets/dictionaries/en";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ButtonPair
        left={<Button type={buttonTypes.PRIMARY}>{translations.yes}</Button>}
        right={<Button type={buttonTypes.OUTLINED}>{translations.no}</Button>}
      />
      <Text>Hello</Text>
      <ButtonPair
        left={<Button type={buttonTypes.OUTLINED}>{translations.yes}</Button>}
        right={<Button type={buttonTypes.OUTLINED}>{translations.no}</Button>}
      />
      <Text>Hello</Text>
      <ButtonPair
        left={<Button type={buttonTypes.OUTLINED}>{translations.yes}</Button>}
        right={<Button type={buttonTypes.PRIMARY}>{translations.no}</Button>}
      />
    </div>
  );
}
