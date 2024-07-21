import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });
  useEffect(() => {
    const initialUserDetection = async () => {
      let loggedInUser = null;
      if (localStorage.getItem("user")) {
        loggedInUser = JSON.parse(localStorage.getItem("user"));
      }
      if (sessionStorage.getItem("user")) {
        loggedInUser = JSON.parse(sessionStorage.getItem("user"));
      }
      if (loggedInUser) {
        dispatch({ type: "LOGIN", payload: loggedInUser });
      }
    };
    initialUserDetection();
  }, []); //leaving the second argument as an empty array ensures that this function is fired once the component is initialized only
  console.log("Auth COntext: ", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
