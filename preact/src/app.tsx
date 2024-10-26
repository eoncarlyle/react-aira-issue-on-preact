import "./app.css";

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
