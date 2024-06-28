import { useAuthContext } from "./useAuthContext";
import { useGameSettings } from "./useGameSettings";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: GameSettingsDispatch } = useGameSettings();
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
