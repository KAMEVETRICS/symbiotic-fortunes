import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import SymbioticFortuneCards from "./SymbioticFortuneCards.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SymbioticFortuneCards />
  </React.StrictMode>
);


