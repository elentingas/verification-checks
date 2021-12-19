import React from "react";
import Button, { buttonTypes } from "./UIKit/Button";
import Text from "./UIKit/Text";
import ButtonPair from "./UIKit/ButtonPair";
import dictionary from "./assets/dictionary";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ButtonPair
        left={<Button type={buttonTypes.PRIMARY}>{dictionary.yes}</Button>}
        right={<Button type={buttonTypes.OUTLINED}>{dictionary.no}</Button>}
      />
      <Text>Hello</Text>
      <ButtonPair
        left={<Button type={buttonTypes.OUTLINED}>{dictionary.yes}</Button>}
        right={<Button type={buttonTypes.OUTLINED}>{dictionary.no}</Button>}
      />
      <Text>Hello</Text>
      <ButtonPair
        left={<Button type={buttonTypes.OUTLINED}>{dictionary.yes}</Button>}
        right={<Button type={buttonTypes.PRIMARY}>{dictionary.no}</Button>}
      />
    </div>
  );
}
