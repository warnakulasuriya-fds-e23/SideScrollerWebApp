import { useAuthContext } from "./useAuthContext";
import { useGameSettings } from "./useGameSettings";
export const UseLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: GameSettingsDispatch } = useGameSettings();
  const Logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    GameSettingsDispatch({ type: "CLEAR" });
  };
  return { Logout };
};
