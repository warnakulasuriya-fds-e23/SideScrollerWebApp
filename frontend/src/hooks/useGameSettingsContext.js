import { GameSettingsContext } from "../context/GameSettingsContext";
import { useContext } from "react";

export const useGameSettingsContext = () => {
  const context = useContext(GameSettingsContext);
  if (!context) {
    throw Error(
      "Error! the useGameSettings hook must be used inside a GameSettingsProvider child element"
    );
  }

  return context;
};
