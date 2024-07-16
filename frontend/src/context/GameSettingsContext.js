import { createContext, useReducer } from "react";

export const GameSettingsContext = createContext();

const GameSettingsReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_UP":
      return {
        gameSettings: action.payload,
      };
    case "CLEAR":
      return {
        gameSettings: null,
      };

    default:
      return state;
  }
};

export const GameSettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameSettingsReducer, {
    gameSettings: null,
  });
  console.log("Game Settings COntext: ", state);
  return (
    <GameSettingsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameSettingsContext.Provider>
  );
};
