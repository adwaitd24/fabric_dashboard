import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "@uifabric/icons";

import { OneDriveUI } from "./Examples";

initializeIcons();

function App() {
  return <OneDriveUI />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
