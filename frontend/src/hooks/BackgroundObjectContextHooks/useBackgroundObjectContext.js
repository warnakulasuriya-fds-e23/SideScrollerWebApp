import { BackgroundObjectContext } from "../../context/BackgroundObjectContext";
import { useContext } from "react";

export const useBackgroundObjectContext = () => {
  const context = useContext(BackgroundObjectContext);
  if (!context) {
    throw Error(
      "useBackgroundObjectContext hook can only be used inside a BackgroundObjectContextProvider child element"
    );
  }
  return context;
};
