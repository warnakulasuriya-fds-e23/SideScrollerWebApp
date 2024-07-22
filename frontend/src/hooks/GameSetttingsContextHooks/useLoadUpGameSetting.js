import { useGameSettingsContext } from "./useGameSettingsContext";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";
import axios from "axios";
export const useLoadUpGameSettings = () => {
  const { dispatch } = useGameSettingsContext();
  const { user } = useAuthContext();

  const LoadUpGameSettingsFromBackend = async () => {
    const response = await axios.get("/api/gameSettings", {
      headers: {
        Authorization: `Bearer ${user.createdToken}`,
      },
    });
    if (response.data) {
      dispatch({ type: "LOAD_UP", payload: response.data });
    }
  };
  return { LoadUpGameSettingsFromBackend };
};
