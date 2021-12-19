import React from "react";
import Button, { buttonTypes } from "./UIKit/Button";
import ButtonPair from "./UIKit/ButtonPair";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ButtonPair
        left={<Button type={buttonTypes.PRIMARY}>yes</Button>}
        right={<Button type={buttonTypes.OUTLINED}>no</Button>}
      />
      test
      <ButtonPair
        left={<Button type={buttonTypes.OUTLINED}>yes</Button>}
        right={<Button type={buttonTypes.OUTLINED}>no</Button>}
      />
      test
      <ButtonPair
        left={<Button type={buttonTypes.OUTLINED}>yes</Button>}
        right={<Button type={buttonTypes.PRIMARY}>no</Button>}
      />
    </div>
  );
}
