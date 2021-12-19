import React from "react";
import Button, { ButtonTypes } from "./UIKit/Button";
import ButtonPair from "./UIKit/ButtonPair";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ButtonPair
        left={<Button type={ButtonTypes.PRIMARY}>yes</Button>}
        right={<Button type={ButtonTypes.OUTLINED}>no</Button>}
      />
      test
      <ButtonPair
        left={<Button type={ButtonTypes.OUTLINED}>yes</Button>}
        right={<Button type={ButtonTypes.OUTLINED}>no</Button>}
      />
      test
      <ButtonPair
        left={<Button type={ButtonTypes.OUTLINED}>yes</Button>}
        right={<Button type={ButtonTypes.PRIMARY}>no</Button>}
      />
    </div>
  );
}
