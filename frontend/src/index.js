import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GameSettingsProvider } from "./context/GameSettingsContext";
import { BackgroundObjectContextProvider } from "./context/BackgroundObjectContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GameSettingsProvider>
        <BackgroundObjectContextProvider>
          <App />
        </BackgroundObjectContextProvider>
      </GameSettingsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
