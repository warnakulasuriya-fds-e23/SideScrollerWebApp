import { useAuthContext } from "./useAuthContext";
import { useGameSettingsContext } from "../GameSetttingsContextHooks/useGameSettingsContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: GameSettingsDispatch } = useGameSettingsContext();
  const Logout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
    if (sessionStorage.getItem("user")) {
      sessionStorage.removeItem("user");
    }
    dispatch({ type: "LOGOUT" });
    GameSettingsDispatch({ type: "CLEAR" });
  };
  return { Logout };
};
