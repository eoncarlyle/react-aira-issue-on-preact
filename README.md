# Possible Preact Bug

The following demonstrates a possible bug in Preact when using the React Aria [`ListBoxItem`](https://react-spectrum.adobe.com/react-aria/ListBox.html) component.
The Preact and React directories render a [`ComboBox`](https://react-spectrum.adobe.com/react-aria/ComboBox.html) with a single `ListBoxItem`.


To reproduce the error in Preact and compare against the working React application, run the following:
```shell
$ npm --prefix preact install
$ npm --prefix preact run dev
```
In another terminal:
```
$ npm --prefix react install
$ npm --prefix react run dev
```

Note that
```shell
$ diff preact/src/app.tsx react/src/App.tsx
1,2c1,2
< import { useState } from "preact/hooks";
< import preactLogo from "./assets/preact.svg";
---
> import { useState } from "react";
> import reactLogo from "./assets/react.svg";
4c4
< import "./app.css";
---
> import "./App.css";
17a18
>
```
