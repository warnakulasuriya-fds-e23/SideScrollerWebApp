import { createContext, useReducer } from "react";

export const BackgroundObjectContext = createContext();

const BackgroundObjectReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_UP":
      return {
        BackgroundObject: action.payload,
      };
    case "CLEAR":
      return {
        BackgroundObject: null,
      };
    default:
      return state;
  }
};

export const BackgroundObjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BackgroundObjectReducer, {
    BackgroundObject: null,
  });
  return (
    <BackgroundObjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BackgroundObjectContext.Provider>
  );
};
