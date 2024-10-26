import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ComboBox>
        <Label>Favorite Animal</Label>
        <div>
          <Input />
          <Button>▼</Button>
        </div>
        <Popover>
          <ListBox key="lb">
            <ListBoxItem key="lb-item" className="myClass">
              Aardvark
            </ListBoxItem>
          </ListBox>
        </Popover>
      </ComboBox>
    </>
  );
}
