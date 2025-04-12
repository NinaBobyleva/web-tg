import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./store/ReduxProvider.tsx";
import { MaterialsProvider } from "./context/MaterialContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MaterialsProvider>
      <ReduxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </MaterialsProvider>
  </StrictMode>,
);
